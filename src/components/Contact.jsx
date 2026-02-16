"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  Paper,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    company: "", // ✅ honeypot (hidden)
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", msg: "" });
  const [errors, setErrors] = useState({});

  const validators = useMemo(
    () => ({
      name: (v) => (v.trim().length >= 2 ? "" : "Name must be at least 2 characters"),
      phoneNumber: (v) =>
        /^[+()\-\s0-9]{7,20}$/.test(v.trim())
          ? ""
          : "Enter a valid phone number",
      email: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email",
      message: (v) =>
        v.trim().length >= 10 ? "" : "Message must be at least 10 characters",
    }),
    []
  );

  const validateAll = () => {
    const next = {
      name: validators.name(form.name),
      phoneNumber: validators.phoneNumber(form.phoneNumber),
      email: validators.email(form.email),
      message: validators.message(form.message),
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
    // live validate
    if (validators[key]) {
      setErrors((p) => ({ ...p, [key]: validators[key](value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot: botlar ko‘pincha hamma fieldni to‘ldiradi
    if (form.company) return;

    if (!validateAll()) {
      setToast({ open: true, type: "error", msg: "Please fix the errors in the form." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phoneNumber: form.phoneNumber.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Try again.");
      }

      setForm({ name: "", phoneNumber: "", email: "", message: "", company: "" });
      setErrors({});
      setToast({ open: true, type: "success", msg: "Message sent successfully!" });
    } catch (err) {
      setToast({ open: true, type: "error", msg: err.message || "Failed to send." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{ py: { xs: 6, md: 10 }, px: 2 }}
    >
      <Box sx={{ maxWidth: 720, mx: "auto" }}>
        <Typography variant="h3" textAlign="center" fontWeight={900} mb={1}>
          Contact Me
        </Typography>
        <Typography color="text.secondary" textAlign="center" mb={4}>
          Have a project in mind? Send details and I’ll reply as soon as possible.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            border: "1px solid rgba(148,163,184,0.15)",
          }}
        >
          {/* Quick actions */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems={{ xs: "stretch", sm: "center" }}
            justifyContent="space-between"
          >
            <Typography fontWeight={800}>Quick contact</Typography>

            <Stack direction="row" spacing={1}>
              <Tooltip title="Telegram" arrow>
                <IconButton
                  component="a"
                  href="https://t.me/Yusupov_Jumanazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="GitHub" arrow>
                <IconButton
                  component="a"
                  href="https://github.com/jumanazar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Call" arrow>
                <IconButton component="a" href="tel:+998995183709" aria-label="Phone">
                  <PhoneIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              {/* Honeypot (hidden field) */}
              <TextField
                label="Company"
                value={form.company}
                onChange={handleChange("company")}
                autoComplete="off"
                sx={{ display: "none" }}
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  error={Boolean(errors.name)}
                  helperText={errors.name || " "}
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  required
                  value={form.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber || " "}
                  fullWidth
                />
              </Stack>

              <TextField
                label="Email"
                required
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                error={Boolean(errors.email)}
                helperText={errors.email || " "}
                fullWidth
              />

              <TextField
                label="Message"
                multiline
                rows={5}
                required
                value={form.message}
                onChange={handleChange("message")}
                error={Boolean(errors.message)}
                helperText={errors.message || "Tell me what you want to build, deadline, and budget (if any)."}
                fullWidth
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ fontWeight: 900 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                <Button
                  component={Link}
                  href="/projects"
                  variant="outlined"
                  size="large"
                  sx={{ fontWeight: 900 }}
                >
                  View Projects
                </Button>
              </Stack>
            </Stack>
          </form>
        </Paper>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={3500}
        onClose={() => setToast((p) => ({ ...p, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast((p) => ({ ...p, open: false }))}
          severity={toast.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}