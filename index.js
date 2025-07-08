const PptxGenJS = require('pptxgenjs');
const { addDemoContent } = require('./slideContent');

// Define a custom layout for 1920x1080px (20x11.25in)
const CUSTOM_LAYOUT = { name: 'CUSTOM_16x9', width: 20.0625, height: 13.37 };

let pptx = new PptxGenJS();
pptx.defineLayout(CUSTOM_LAYOUT);
pptx.layout = 'CUSTOM_16x9';

let slide = pptx.addSlide();
slide.background = { color: 'F6F8FB' };

addDemoContent(slide, pptx);

pptx.writeFile({ fileName: 'DemoPresentation.pptx' })
  .then(() => {
    console.log('Presentation created: DemoPresentation.pptx');
  })
  .catch((err) => {
    console.error('Error creating presentation:', err);
  }); 