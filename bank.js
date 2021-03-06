const macroVocabulary = {
    english : [
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
        "string",
        "less",
        "staging",
        "spare",
        "less"
    ],
    unix : [
        "pwd",
        "ls",
        "cd",
        "mkdir",
        "touch",
        "cat >",
        "rm",
        "rm -r",
        "grep",
        "--help",
        "echo",
        "less",
        "open",
        "whoami"
    ],
    computing : [
        "solaris",
        "sun",
        "bit",
        "byte",
        "GUI",
        "shell",
        "IDE",
        "git",
        "repository",
        "CMS"
    ],
    javascript : [
        ".map",
        "Math.floor",
        "Math.random",
        ".toString",
        "Object.keys",
        "String.substr()"
    ],
    git : [
        "clone",
        "init",
        "add",
        "status",
        "commit -m",
        "commit -am",
        "push",
        "pull",
        "merge"
    ],
    html : [
        "article",
        "h1",
        "p",
        "a",
        "br"
    ]
};
function engine (vocabulariesData){
    const numberOfVocabularies = Object.keys(vocabulariesData).length;
    for (let index = 0; index < numberOfVocabularies; index++) {
        const vocabularies = Object.keys(vocabulariesData);
        const selectedVocabulary = vocabularies[index];
        let stringVocabulary = selectedVocabulary.toString();
        const vocabulary = macroVocabulary[stringVocabulary];
        const selectedWord = vocabulary[Math.floor((Math.random()*vocabulary.length))];
        console.log(`${stringVocabulary}:${selectedWord}`);
    }
};
console.log("Today´s words")
engine(macroVocabulary);