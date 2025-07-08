function addTitle(slide, pptx) {
  slide.addText('The Dependencies Dilemma', {
    x: 1,
    y: 0.6,
    w: 17.6,
    h: 1.2,
    fontSize: 60,
    bold: true,
    color: '22325A',
    align: 'left',
    fontFace: 'Arial'
  });
}

function addSubtitle(slide, pptx) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.1,
    y: 2.1,
    w: 17.6,
    h: 1.2,
    fill: { color: 'FFFFFF' },
    line: { color: 'FFFFFF' },
    shadow: { type: 'outer', color: '888888', blur: 8, offset: 4, angle: 90, opacity: 0.18 },
    rectRadius: 0.2
  });
  slide.addText(
    [
      { text: "The value of an initiative isn't just its immediate impact, ", options: { fontSize: 32, italic: true, color: '22325A', fontFace: 'Arial' } },
      { text: 'but what it unlocks ', options: { fontSize: 32, italic: true, color: '4BA96E', fontFace: 'Arial' } },
      { text: '\uD83D\uDD12.', options: { fontSize: 32, italic: true, color: '22325A', fontFace: 'Arial' } }
    ],
    {
      x: 1.3,
      y: 2.1,
      w: 17.6,
      h: 1.1,
      fontFace: 'Arial',
      valign: 'middle',
    }
  );
}

function addRealWorldExample(slide, pptx) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.1,
    y: 3.6,
    w: 8.7,
    h: 3.6,
    fill: { color: 'F6F8FB' },
    line: { color: 'E3E7ED' },
    shadow: { type: 'outer', color: '888888', blur: 6, offset: 2, angle: 90, opacity: 0.10 },
    rectRadius: 0.2
  });
  slide.addText('Real-World Example', {
    x: 1.3,
    y: 4,
    w: 8,
    h: 0.5,
    fontSize: 26,
    bold: true,
    color: '22325A',
    fontFace: 'Arial',
    align: 'left',
    valign: 'top',
  });
  slide.addText('A fintech startup invested in comprehensive KYC infrastructure that enabled:', {
    x: 1.3,
    y: 4.6,
    w: 8,
    h: 0.5,
    fontSize: 20,
    color: '22325A',
    fontFace: 'Arial',
    align: 'left',
    valign: 'top',
  });
  const bullets = [
    'Launch in 4 new countries within 12 months',
    'Add 3 regulated financial products',
    'Partner with 2 major banks',
    'Achieve compliance in weeks instead of months'
  ];
  bullets.forEach((text, i) => {
    slide.addText(text, {
      x: 1.5,
      y: 5.45 + i * 0.38,
      w: 7.4,
      h: 0.4,
      fontSize: 20,
      color: '22325A',
      fontFace: 'Arial',
      align: 'left',
      valign: 'top',
      bullet: {
        indent: 10
      }
    });
  });
}

function addDependencyMapping(slide, pptx) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.1,
    y: 7.5,
    w: 8.7,
    h: 3.1,
    fill: { color: 'FFFFFF' },
    line: { color: 'E3E7ED' },
    shadow: { type: 'outer', color: '888888', blur: 6, offset: 2, angle: 90, opacity: 0.10 },
    rectRadius: 0.2
  });
  slide.addText('Dependency Mapping', {
    x: 1.3,
    y: 7.8,
    w: 8,
    h: 0.5,
    fontSize: 26,
    bold: true,
    color: '22325A',
    fontFace: 'Arial',
    align: 'left',
    valign: 'top',
  });
  const depBullets = [
    'Foundation capabilities vs. surface features',
    'Regulatory infrastructure unlocks market expansion',
    'Compliance systems enable product diversification'
  ];

  depBullets.forEach((text, i) => {
    slide.addText(text, {
      x: 1.3,
      y: 8.5 + i * 0.7,
      w: 8,
      h: 0.4,
      align: 'left',
      valign: 'top',
      fontFace: 'Arial',
      fontSize: 24,
      bullet: {
        characterCode: 'U+25CF',
        indent: 10
      }
    });
  });
}

function addKeyInsight(slide, pptx) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.1,
    y: 10.9,
    w: 8,
    h: 1.9,
    fill: { color: '4BA96E' },
    line: { color: '4BA96E' },
    rectRadius: 0.2
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 1.1 + 0.1,
    y: 10.9,
    w: 8.7 - 0.1,
    h: 1.9,
    fill: { color: 'E6F4EC' },
    line: { color: 'E6F4EC' },
    shadow: { type: 'outer', color: '888888', blur: 6, offset: 2, angle: 90, opacity: 0.10 },
    rectRadius: 0.2
  });
  slide.addText([
    { text: 'Key Insight: ', options: { fontSize: 24, bold: true, color: '4BA96E', fontFace: 'Arial' } },
    { text: 'Foundation investments create exponential value through what they unlock, not just their direct impact.', options: { fontSize: 24, color: '22325A', fontFace: 'Arial' } }
  ], {
    x: 1.4,
    y: 11.3,
    w: 8,
    h: 0.95,
    lineSpacing: 32,
    align: 'left',
    valign: 'middle',
    fontFace: 'Arial',
  });
}

function addFeatureEnablementTree(slide, pptx) {
  // Background for Feature Enablement Tree
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 10.15,
    y: 5.1,
    w: 8.7,
    h: 6.2,
    fill: { color: 'FFFFFF' },
    line: { color: 'E3E7ED' },
    shadow: { type: 'outer', color: '888888', blur: 8, offset: 4, angle: 90, opacity: 0.15 },
    rectRadius: 0.2
  });

  // Title
  slide.addText('Feature Enablement Tree', {
    x: 11, y: 5.35, w: 7, h: 0.5,
    fontSize: 24, color: '22325A', fontFace: 'Arial', align: 'center', valign: 'middle'
  });

  // Diagram Agenda (legend style, below the tree, matching the example)
  const legendY = 10.7; // tree background y + h + gap
  const legendItems = [
    { text: 'Foundation', color: '3B7DDD' },
    { text: 'Compliance', color: '4BA96E' },
    { text: 'Products', color: 'F6C244' },
    { text: 'Revenue', color: '8B2332' }
  ];
  const legendW = 7.5, legendH = 0.3;
  const legendX = 10.5 + (8.5 - legendW) / 2; // tree background x + centering
  const legendSpacing = legendW / legendItems.length;
  legendItems.forEach((item, i) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: legendX + i * legendSpacing,
      y: legendY + 0.05,
      w: 0.22,
      h: 0.22,
      fill: { color: item.color },
      line: { color: item.color }
    });
    slide.addText(item.text, {
      x: legendX + i * legendSpacing + 0.28,
      y: legendY,
      w: legendSpacing - 0.28,
      h: legendH,
      fontSize: 15,
      color: '22325A',
      fontFace: 'Arial',
      align: 'left',
      valign: 'middle',
      fontSize: 18,
      bold: false
    });
  });

  // Revenue (top row, maroon)
  const revenueBoxes = [
    { text: 'Banking-as-a-Service', x: 11.6 },
    { text: 'White-Label Solutions', x: 13.2 },
    { text: 'Cross-Border Payments', x: 14.8 },
    { text: 'Institutional Trading', x: 16.5 }
  ];
  const revenueBoxW = 1.4, revenueBoxH = 0.55, revenueY = 6.3;
  revenueBoxes.forEach((node, i) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: node.x, y: revenueY, w: revenueBoxW, h: revenueBoxH,
      fill: { color: '8B2332' }, line: { color: '8B2332' }, rectRadius: 0.1
    });
    slide.addText(node.text, {
      x: node.x, y: revenueY, w: revenueBoxW, h: revenueBoxH,
      fontSize: 12, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Arial'
    });
  });

  // Products (second row, yellow)
  const productBoxes = [
    { text: 'International Markets', x: 11.6, revenueIndexes: [{ idx: 0, flipH: false }] },
    { text: 'Business Banking', x: 13.2, revenueIndexes: [{ idx: 1, flipH: false }] },
    { text: 'Investment Platform', x: 14.8, revenueIndexes: [{ idx: 2, flipH: false }] },
    { text: 'Lending Products', x: 16.5, revenueIndexes: [{ idx: 3, flipH: false }] }
  ];
  const productBoxW = 1.4, productBoxH = 0.55, productY = 7.7;
  productBoxes.forEach((node, i) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: node.x, y: productY, w: productBoxW, h: productBoxH,
      fill: { color: 'F6C244' }, line: { color: 'F6C244' }, rectRadius: 0.1
    });
    slide.addText(node.text, {
      x: node.x, y: productY, w: productBoxW, h: productBoxH,
      fontSize: 12, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Arial'
    });
  });

  // Compliance (third row, green)
  const complianceBoxes = [
    { text: 'AML Monitoring', x: 12.3, productIndexes: [{ idx: 0, flipH: false }, { idx: 1, flipH: true }] },
    { text: 'Regulatory Reporting', x: 13.9, productIndexes: [{ idx: 2, flipH: true }] },
    { text: 'Risk Assessment', x: 15.5, productIndexes: [{ idx: 3, flipH: true }] }
  ];
  const complianceBoxW = 1.3, complianceBoxH = 0.55, complianceY = 9;
  complianceBoxes.forEach((node, i) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: node.x, y: complianceY, w: complianceBoxW, h: complianceBoxH,
      fill: { color: '4BA96E' }, line: { color: '4BA96E' }, rectRadius: 0.1
    });
    slide.addText(node.text, {
      x: node.x, y: complianceY, w: complianceBoxW, h: complianceBoxH,
      fontSize: 12, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Arial'
    });
  });

  // Foundation (bottom row, blue)
  const foundationBox = {
    text: 'KYC/Identity Verification',
    x: 12.9,
    y: 10,
    w: 3.2,
    h: 0.6,
    complianceIndexes: [
      { idx: 0, flipH: false },
      { idx: 1, flipH: false },
      { idx: 2, flipH: true }
    ]
  };
  slide.addShape(pptx.ShapeType.roundRect, {
    x: foundationBox.x, y: foundationBox.y, w: foundationBox.w, h: foundationBox.h,
    fill: { color: '3B7DDD' }, line: { color: '3B7DDD' }, rectRadius: 0.1
  });
  slide.addText(foundationBox.text, {
    x: foundationBox.x + 0.9, y: foundationBox.y, w: 1.5, h: foundationBox.h,
    fontSize: 15, color: 'FFFFFF', align: 'center', valign: 'middle', fontFace: 'Arial'
  });

  // --- Draw lines from foundation to selected compliance boxes ---
  function centerX(x, w) { return x + w / 2; }
  function topY(y) { return y; }
  function bottomY(y, h) { return y + h; }

  const foundationCenterX = centerX(foundationBox.x, foundationBox.w);
  const foundationTopY = topY(foundationBox.y);
  foundationBox.complianceIndexes.forEach(({ idx, flipH }) => {
    const box = complianceBoxes[idx];
    const compCenterX = centerX(box.x, complianceBoxW);
    const compBottomY = bottomY(complianceY, complianceBoxH);
    slide.addShape(pptx.ShapeType.line, {
      x: foundationCenterX,
      y: foundationTopY,
      w: compCenterX - foundationCenterX,
      h: compBottomY - foundationTopY,
      line: { color: '4BA96E', width: 2 },
      flipH
    });
  });

  // Draw lines from Compliance to Products
  complianceBoxes.forEach((compBox) => {
    const compCenterX = centerX(compBox.x, complianceBoxW);
    const compTopY = topY(complianceY);
    compBox.productIndexes.forEach(({ idx, flipH }) => {
      const prodBox = productBoxes[idx];
      const prodCenterX = centerX(prodBox.x, productBoxW);
      const prodBottomY = bottomY(productY, productBoxH);
      slide.addShape(pptx.ShapeType.line, {
        x: compCenterX,
        y: compTopY,
        w: prodCenterX - compCenterX,
        h: prodBottomY - compTopY,
        line: { color: '4BA96E', width: 2 },
        flipH
      });
    });
  });

  // Draw lines from Products to Revenue
  productBoxes.forEach((prodBox) => {
    const prodCenterX = centerX(prodBox.x, productBoxW);
    const prodTopY = topY(productY);
    prodBox.revenueIndexes.forEach(({ idx, flipH }) => {
      const revBox = revenueBoxes[idx];
      const revCenterX = centerX(revBox.x, revenueBoxW);
      const revBottomY = bottomY(revenueY, revenueBoxH);
      slide.addShape(pptx.ShapeType.line, {
        x: prodCenterX,
        y: prodTopY,
        w: revCenterX - prodCenterX,
        h: revBottomY - prodTopY,
        line: { color: 'F6C244', width: 2 },
        flipH
      });
    });
  });

}

function addDemoContent(slide, pptx) {
  addTitle(slide, pptx);
  addSubtitle(slide, pptx);
  addRealWorldExample(slide, pptx);
  addDependencyMapping(slide, pptx);
  addKeyInsight(slide, pptx);
  addFeatureEnablementTree(slide, pptx);
}

module.exports = { addDemoContent }; 