const macroVocabulary = {
    englishVocabulary : [
        "spread",
        "knowledge",
        "ledge",
        "sense",
        "word",
        "sentence",
        "windows",
        "lenght",
        "index",
        "amount",
        "string"
    ],
    unixVocabulary : [
        "pwd",
        "ls",
        "cd",
        "mkdir",
        "touch",
        "cat >",
        "rm",
        "rm -r",
        "grep"
    ],
    computingVocabulary : [
        "solaris",
        "sun",
        "bit",
        "byte",
    ]
};
function engine (vocabulariesData){
    const numberOfVocabularies = Object.keys(vocabulariesData).length;
    for (let index = 0; index < numberOfVocabularies; index++) {
        const vocabularies = Object.keys(vocabulariesData);
        const selectedVocabulary = vocabularies[index];
        let stringVocabulary = selectedVocabulary.toString();
        const vocabulary = macroVocabulary[stringVocabulary];
        typeof vocabulary;
        const selectedWord = vocabulary[Math.floor((Math.random()*vocabulary.length))];
        console.log(selectedWord);
    }
};
console.log(engine(macroVocabulary));