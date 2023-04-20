import express from "express";
import cors from "cors";
import pdfPoppler from "pdf-poppler";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const inputPdfFile = "./assets/pdfFile.pdf";
  const outputDir = "./output";

  const opts = {
    format: "png",
    out_dir: outputDir,
    out_prefix: "page",
    page: null,
  };

  pdfPoppler
    .convert(inputPdfFile, opts)
    .then((res) => {
      console.log("Successfully converted PDF to images!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
