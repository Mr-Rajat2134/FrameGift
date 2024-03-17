import "./AnniversaryFramers.css";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from "@mui/material"; // Importing necessary components from Material-UI
import { coupleAnniversary } from "../../Data"; // Importing data

const AnniversaryFramers = () => {
  const itemsToShow = coupleAnniversary.slice(0, 4);
  return (
    <div id="AnniversaryFramers">
      <div className="AnniversaryFramers_Text">
        <h1>Anniversary Framers</h1>
        <p>Display your memories with Celebration Crafters.</p>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" }, // Column layout on small screens, row layout on larger screens
          paddingLeft: { xs: "5rem", sm: "1rem" }, // No left padding on small screens, 1rem left padding on larger screens
          gap: "2rem",
        }}
      >
        {itemsToShow.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 245,
              marginBottom: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <CardMedia
              component="img"
              alt={item.title}
              height="340"
              image={item.Image}
            />
            <Divider />
            <CardContent sx={{ bgcolor: "#FFD1DA", padding: "16px" }}>
              {" "}
              {/* Adjusted background color and padding */}
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500" }}
                gutterBottom
                component="div"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From{" "}
                <Typography sx={{ color: "black" }}>₹{item.price}</Typography>
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                bgcolor: "#FFD1DA",
                padding: "16px",
                justifyContent: "space-between",
              }}
            >
              {" "}
              {/* Adjusted background color, padding, and alignment */}
              <Button
                onClick={() => {
                  const whatsappUrl = `https://wa.me/7987787258?text=I%20want%20to%20order%20${encodeURIComponent(
                    item.title
                  )}%20framed%20print`;
                  window.open(whatsappUrl, "_blank");
                }}
                sx={{ color: "red" }}
                size="small"
              >
                Order Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default AnniversaryFramers;
