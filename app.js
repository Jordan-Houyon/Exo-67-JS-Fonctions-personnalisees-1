function textUpdate (ParagraphId, remplacementText) {
    let paragraph = document.getElementById(ParagraphId);
    paragraph.innerText = remplacementText;
}

textUpdate("p1","Premier Paragraphe");
textUpdate("p2","Deuxième paragraphe");
textUpdate("p3","Troisième paragraphe");
textUpdate("p4", "Quatrième paragraphe");
textUpdate("p5", "Cinquième et dernier paragraphe");
