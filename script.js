
const pharmacy = ['lekarstwa','leki','termometr','butelka po syropie leczniczyn z zawartością']
const bio = ['części roślin', 'herbata - fusy','kawa-fusy','kora','kwiaty bez ziemi','obierki warzywne','obierki owocowe','owoce','resztki owoców','siano','skorupki jajek','skorupki od jajek','trociny','warzywa','resztki warzyw','wióry z temperówki','siano','trociny','łupiny orzechów','pieczywo','chleb','bułka','bułki']
const metalsAndPlastics = ['agrafka','szpilka','igła do szycia','aluminiowe wieczka','blacha do pieczenia','butelka PET','butelka plastikowa','celofan','deska do krojenia plastikowa','dezodorant','opalowanie po lakierach do włosów','długopis','folia aluminiowa','garnki','kapsle od butelek','kapsułki po kawie','karton po napojach','karton po mleku','karton po soku','karton po śmietanie','kubły po farbach','metale kolorowe','naczynia jednorazowe z plastiku','opakowanie po areozolach','opakowanie po jogurcie','opakowanie po środkach czystości','opakowanie po chipsach','papierki po cukierkach','plastikowe opakowanie','podkładka pod myczkę','puszka po paście','puszka po paście do butów','puszka po karmie','puszka po karmie dla zwierząt','puszka po konserwach','puszka po napoju','puszka po piwie','rozbite szkło','potłuczone szkło','torebka po przyprawach','sztućce plastikowe','opakowanie po przyprawach','tubki po paście do zębów','wanienka plastikowa','zabawki z tworzywa sztucznego','zakrętki od słoików','nakrętka','butelka od zmywacza do paznokci- plastikowa','doniczka plastikowa','butelka plastikowa','opakowanie plastikowe po chemii','butelka po domestosie','butelka po płynie do mycia okien','butelka po szamponie','opakowanie po mydle w płynie','opakowanie po oleju silnikowym','opakowanie po rozpuszczalniku','metalowa puszka po rozpuszczalniku','koperta z okienkiem foliowym','koperta bąbelkowa','torebka foliowa','zrywka','reklamówka','butelka po mydle w płynie','butelka po płynie do mycia szyb','butelka po płynie do podłóg','butelka po żelu pod prysznic','plastikowa butelka po oleju','butelka po kefirze','butelka po maślance','kubek po kefirze','kubek po maślance','kubek po serku homogenizowanym','kubek po śmietanie','opakowanie po jogurcie','opakowanie po margarynie','opakowanie po serku wiejskim','butelka po ketchupie- plastikowa','folia stretch','opakowanie po batoniku','opakowanie po makaronie','opakowanie po paluszkach','opakowanie po chipsach','opakowanie po proszku do prania','opakowanie po wafelku']
const paper = ['gazeta','czasopisno','karton','karton po jajkach','wytłaczanka po jajkach','katalog','koperta','książka','notes','opakowanie z kartony','papier','papier do drukarki','papier listowy','pudełko po pizzy','tektura','tektura falista','ulotki','zaszyt','ulotka','papier szkolny','papier pakowy','torba papierowa','worek papierowy','naczynia jednorazowe papierowe','karton po soli do zmywarek','karton po proszku do prania','blok rysunkowy','blok techniczny','torebka po cukrze','opakowanie po cukrze','torebka po mące','opakowanie po mące','papierowa torba na zakupy','karton po kaszy','karton po ryżu','pudełko','pudełko po ciastkach','pudełko po herbacie','pudełko po kakao','pudełko po paście do zębów','rokla po papierze toaletowym','rolka po ręczniku papierowym']
const generalWaste = ['artykuły higieniczne','artykuły kosmetyczne','balon dmuchany','bandaż','gaza','gaziki','blistry po tabletkach','listki po tabletkach','bombki choinkowe','buty','ceramika','cerata','deska do krojenia drewniana','dętka rowerowa','doniczka ceramiczna','fajans','flamastry','guma do żucia','igła medyczna','strzykawka','igła od glukometru','kaseta magnetofonowa','kaseta video','kości','kredki','kryształy','kubek ceramiczny','kwiatki sztuczne','lupa','lustro','mięso','naczynie żaroodporne','niedopałki papierosów','odchody zwierząt','opakowanie papierowe po maśle','opakowanie po lekarstwach','ości','pampersy i pieluchy jednorazowe','pampers','pielucha','papier do pieczenia','papier kalkowy','papier lakierowany','papier foliowany','papier pokryty folią','papier przebitkowy','papier ścierny','papier termiczny','paragon fiskalny','paragon','pasek skórzany','paski od glukometrów','piłka dmuchana','pisaki','plaster','plastry','prezerwatywy','kondomy','produkty mleczne','pumeks','pusta zalalniczka','resztki jedzenia pochodzenia zwierzęcego','resztki karmy dla zwierząt','rozbite szkło okienne','potłuczone szkło okienne','rozsypana ziemia z doniczki','ryby','smoczek dziecięcy','soczewki kontaktowe','strzykawki','styropian','szczoteczka do zębów','szczotka do muszli klozetowej','szczotka do włosów','szkło okularowe','sznurek','ubrania','rajstopy','rajtuzy','pończochy','szmatka','ścierka','ręcznik','pościel','spodnie','sukienka','szal','szalik','rękawiczki','poduszka','kołdra','kurtka','majtki','biustonosz','buty','test ciążowy','torebka z herbatą','wata opatrunkowa','wędliny','włosy','worki z odkurzacza','wystuczony popiół','zabrudzone pudełko po pizzy','zabrudzony papier','zapałki zużyte','zdjęcia na błyszczącym papierze','znicze z woskiem','zużyte narzędzia malarskie','zużyte papierowe naczynia jednorazowe','żwirek po zwierzętach','ręczniki papierowe','ręczniki kuchenne zużyte','tampony','podpaski','herbata w torebkach','torebki po herbacie','butelka szklana po lekach','butelka plastikowa po lekach','zyżyty tusz do rzęs','pomadki','pudry','cienie','kalendarz ścienny błyszczący','rozbite szyby okienne','tepeta','fototapeta','szkło żaroodporne','drewno impregnowane-ścinki','szklanka','kieliszek','szczoteka do zębów','gąbka','rękawiczki do zmywania','rękawiczki do nakładania farb','niedopałki','papierowe worki po nawozach','worki po cemencie','opona rowerowa','opona do wózka dziecięcego','opona do hulajnogi','worek po popcornie','doniczka szklana','okulary','porcelana','szkło zbrojone','szyba','talerz','witraż','lalka','piłka do gry','mop','końcówka do mopa','płyta CD','płyta DVD','papier fotowoltaniczny','zdjęcie','zdjęcia','papier do pakowania prezentów','smalec','masło','margaryna','waciki','patyczki higieniczne']
const electricWaste = ['akumulator','bateria','akumulator samochodowy','aparat fotograficzny','kuchenka mikrofalowa','lampki choinkowe','lodówka','ładowarka do telefonu','pralka','telewizor','żarówka','telefon','laptop','komputer']
const municipalWaste = ['bateria łazienkowa','armatura','boazeria','brodzik','chemikalia w orginalnych opakowaniach','dachówka','farby w orginalnych opakowaniach','kabina prysznicowa','okno','drzwi','opona samochodowa','panele','papa','parkiet','siding','tonery do drukarek','umywalka','wanna','tapeta','monitor','styropian budowlany','styropian ociepleniowy']
const glass = ['butelka szklana po napojach','słoik','szklana butelka po oleju','szklane opakowania po kosmetykach','butelka po zmywaczu do paznokci-szklana','butelka po lakierze do paznokci-pusta, szklana','butelka po rozpuszczalniku','butelka po winie','butelka po wódce','butelka po perfumach','flakonik po perfumach','szklana butelka po occie','butelka po ketchupie']

const rubbish = [...pharmacy,...bio,...metalsAndPlastics,...paper,...generalWaste,...electricWaste,...municipalWaste,...glass]

const searchButton = document.getElementById("submit");
const input = document.getElementById("myInput")



function autocomplete(inp, arr) {


  let currentFocus;
  inp.addEventListener("input",function(e){
    let a,b,i,val = this.value;
    closeAllLists();
    if (!val) {return false;}
    currentFocus = -1;
    a = document.createElement("div");
    a.setAttribute('id', this.id + "autocomplete-list")
    a.setAttribute("class","autocomplete-items");
    this.parentNode.appendChild(a)
    for (i=0; i< arr.length; i++){
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){
        b= document.createElement("DIV");
        b.innerHTML = "<strong>"+ arr[i].substr(0, val.length) + "</strong>"
        b.innerHTML += arr[i].substr(val.length);
        
        b.innerHTML += "<input type ='hidden' value='" + arr[i] + "'>"
        
        b.addEventListener("click",function(e){
          inp.value = this.getElementsByTagName("input")[0].value;
      closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function(e){
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div")
    if (e.keyCode == 40){
      currentFocus++;
      addActive(x);
    }else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13){
      e.preventDefault();
      if (currentFocus > -1){
        if (x) x[currentFocus].click()
      }
    }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus <0) currentFocus = (x.length -1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x){
      for (let i=0; i< x.length; i++){
        x[i].classList.remove("autocomplete-active");
      }
    }
function closeAllLists(elmnt){
  let x = document.getElementsByClassName("autocomplete-items");
  for( let i =0; i<x.length; i++){
    if (elmnt != x[i] && elmnt != inp){
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e){
  closeAllLists(e.target);
});
}



autocomplete(document.getElementById("myInput"), rubbish)

input.addEventListener("keyup",function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    searchButton.click();
  }
});

let result =document.getElementById("result")
const searchHandler = () =>{
  let search = document.getElementById('myInput').value;
  if (pharmacy.includes(search))
  {return result.innerHTML = `${search} - apteka`}
  else if (bio.includes(search))
  {return result.innerHTML = `${search} - BIO`}
  else if (metalsAndPlastics.includes(search))
  {return result.innerHTML = `${search} - metale i tworzywa sztuczne`}
  else if (paper.includes(search))
  {return result.innerHTML = `${search} - papier`}
  else if (generalWaste.includes(search))
  {return result.innerHTML = `${search} - pozostałe po segregacji`}
  else if (electricWaste.includes(search))
  {return result.innerHTML = `${search} - punkty zbiórki elektroodpadów`}
  else if (municipalWaste.includes(search))
  {return result.innerHTML = `${search} - PSZOK`}
  else if (glass.includes(search))
  {return result.innerHTML = `${search} - szkło`}
  else
  {return alert("Niestety podany przedmiot nie znajduje się jeszcze w naszej bazie.")}


  

}
if(searchButton){  searchButton.addEventListener("click",searchHandler,false);
}




