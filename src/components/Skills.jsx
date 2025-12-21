"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from "@mui/material";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} sx={{ 
        px: { xs: 2, md: 6 }, mx: "auto", py: 10, maxWidth: 1200}}>
      <Typography variant="h3" fontWeight={700} mb={6}>
        Skills
      </Typography>

      <Grid container spacing={4} flexDirection={'column'}>
        {skills.map((group) => (
          <Grid item xs={12} md={6} key={group.title}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              sx={{
                height: "100%",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(148,163,184,0.15)",
              }}
            >
              <CardContent>
                <Typography variant="h6" mb={3}>
                  {group.title}
                </Typography>

                <Stack spacing={3} >
                  {group.items.map((skill) => (
                    <Box key={skill.name}>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mb={1}
                      >
                        {skill.icon}
                        <Typography>{skill.name}</Typography>
                      </Stack>

                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                      />
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
