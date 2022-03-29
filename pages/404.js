import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Typography, Link as MUILink } from "@mui/material";
import { Box } from "@mui/system";

const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(3);

  setInterval(() => {
    setCounter(counter - 1);
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 30000);
  }, [router]);

  return (
    <Container>
      <Box
        sx={{
          height: "80vh",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography color="error" variant="h1">
            OOOPS
          </Typography>
          <Typography>That Page Can&apos;t be found</Typography>
          <Typography>
            You will be redirected to the
            <Link href="/">
              <MUILink> Home Page </MUILink>
            </Link>{" "}
            in {counter}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
