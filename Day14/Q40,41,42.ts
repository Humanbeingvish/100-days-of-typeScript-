function mkAlbum(artistName: string, albumName: string, track?: string) {
  let album = { artistName, albumName };
  if (track) {
    album["track"] = track;
  }
  return album;
}

console.log(mkAlbum("Sid SriRam ", "Mr Local", "Nee Naicha "));
console.log(mkAlbum("Sid ", "Omg"));

//Q41/

// let MagnicianNames:string[]=['vishnu','glo','ghv'];

// function showMagcian(MagnicianNames:string[]){
//     MagnicianNames.forEach((name)=>{
//         console.log(name)
//     })
// }

// showMagcian(MagnicianNames)

//Q42..
let MagnicianNames: string[] = ["vishnu", "glo", "ghv"];

function showMagcian(MagnicianNames: string[]) {
  MagnicianNames.forEach((MagnicianNames) => {
    console.log(MagnicianNames);
  });
}

function makegreet(MagnicianNames: string[]) {
  for (let i = 0; i < MagnicianNames.length; i++) {
    MagnicianNames[i] = MagnicianNames[i] + "the greet ";
  }
}



showMagcian(MagnicianNames); // Function call to display magicians
makegreet(MagnicianNames); // Function call to add greetings

console.log("After adding greetings:");
showMagcian(MagnicianNames); 