const me = {name:{jap:"勝本麗香",eng:"Reika Katsumoto"},living:{jap:"横浜",eng:"Yokohama"},university: { name: {jap:"上智大学",eng:"Sophia University"}, class: {jap:"三年",eng:"Three"}},family:{jap:"父、母、妹",eng:"Father,Mother,Sister"}}
const like ={food:{jap:"パイナップル",eng:"Pineapple"},color:{jap:"若草色",eng:"Light green"},animal:{jap:"パンダ",eng:"Panda"},youtuber:"JunsKitchen"}
const more ={character:{jap:"性格は基本的に明るいです。一人で行動するのも好きですが、たまに寂しくなり、友達に会いたくなります。どうか皆さん仲良くしてあげてください。",eng:"I am usually cheerful. I like alone, but sometimes feel lonely, and want to see friends. Please be my new friend of mine."},hobby:{jap:"趣味は料理です。コロナで暇だったので、これらのものを作ってみました。自炊に憧れていただけなので、ただの素人ですが...",eng:"I like cooking. I had free time in corona time, and I made them . I just wanted to cook something by myself, so I am amateur…"}}

let mainTitle = document.getElementById("maintitle")
let subTitle =document.getElementById("subtitle")
let subTitle1 = document.getElementById("sub-title1")
let subTitle2 = document.getElementById("sub-title2")
let subTitle3 = document.getElementById("sub-title3")
let moreTitle1 = document.getElementById("more-title1")
let moreTitle2 = document.getElementById("more-title2")
let moreCon1 = document.getElementById("more-con1")
let moreCon2 = document.getElementById("more-con2")

let mainInformation = document.getElementById("main-information")
let whatILike = document.getElementById("what-I-like")
let languageButton = document.getElementById("language-button")
let profileButton = document.getElementById("profile-button")
let myname = document.getElementById("my-name")
let livingErea = document.getElementById("living-erea")
let schoolYear = document.getElementById("school-year")
let schoolName = document.getElementById("school-name")
let myFamily = document.getElementById("my-family")
let myNameAnswer = document.getElementById("my-name-answer")
let livingEreaAnswer = document.getElementById("living-erea-answer")
let schoolYearAnswer = document.getElementById("school-year-answer")
let schoolNameAnswer = document.getElementById("school-name-answer")
let myFamilyAnswer = document.getElementById("my-family-answer")

let likeButton = document.getElementById("like-button")
let food = document.getElementById("food")
let color = document.getElementById("color")
let animal = document.getElementById("animal")
let foodAnswer = document.getElementById("food-answer")
let colorAnswer = document.getElementById("color-answer")
let animalAnswer = document.getElementById("animal-answer")
let youtuber = document.getElementById("youtuber")
let youtuberAnswer = document.getElementById("youtuber-answer")

profileButton.onclick = function(){
  if(myNameAnswer.textContent != me.name.eng){
      myNameAnswer.textContent = me.name.jap
      livingEreaAnswer.textContent = me.living.jap
      schoolYearAnswer.textContent = me.university.class.jap
      schoolNameAnswer.textContent = me.university.name.jap
      myFamilyAnswer.textContent =  me.family.jap}
      }
likeButton.onclick = function(){
  if(foodAnswer.textContent != like.food.eng){
  foodAnswer.textContent = like.food.jap
  colorAnswer.textContent = like.color.jap
  animalAnswer.textContent = like.animal.jap
  youtuberAnswer.textContent = like.youtuber}
  }

languageButton.onclick = function () {
  if(languageButton.textContent == "日本語"){
  languageButton.textContent = "Enlish"
  
  mainTitle.textContent = "Reika Katsumoto"
  subTitle.textContent = "My First Portfolio"
  mainInformation.textContent = "Profile"
  whatILike.textContent = "I like..."
  profileButton.textContent = "View"
  likeButton.textContent = "View"
  subTitle1.textContent = "Main Information"
  subTitle2.textContent = "More"
  subTitle3.textContent = "Addition"
  moreTitle1.textContent = "Character"
  moreTitle2.textContent = "Hobby"

  myname.textContent = "Name"
  livingErea.textContent = "Living in"
  schoolYear.textContent = "Grade"
  schoolName.textContent = "School"
  myFamily.textContent = "Family"
  myNameAnswer.textContent = me.name.eng
  livingEreaAnswer.textContent = me.living.eng
  schoolYearAnswer.textContent = me.university.class.eng
  schoolNameAnswer.textContent = me.university.name.eng
  myFamilyAnswer.textContent = me.family.eng
  food.textContent = "Food"
  color.textContent = "Color"
  animal.textContent = "Animal"
  youtuber.textContent = "Youtuber"
  foodAnswer.textContent = like.food.eng
  colorAnswer.textContent = like.color.eng
  animalAnswer.textContent = like.animal.eng
  youtuberAnswer.textContent = like.youtuber

  moreCon1.textContent = more.character.eng
  moreCon2.textContent = more.hobby.eng
  
  } else{
  languageButton.textContent = "日本語"

  mainTitle.textContent = "勝本麗香"
  subTitle.textContent = "初めてのWeb開発!"
  mainInformation.textContent = "基本情報"
  whatILike.textContent = "好きなものシリーズ"
  profileButton.textContent = "見る👀"
  likeButton.textContent = "見る👀"
  subTitle1.textContent = "基本情報"
  subTitle2.textContent = "もっと見る"
  subTitle3.textContent = "追加情報"
  moreTitle1.textContent = "性格"
  moreTitle2.textContent = "趣味"
  
  myname.textContent = "名前"
  livingErea.textContent = "所在"
  schoolYear.textContent = "学年"
  schoolName.textContent = "大学"
  myFamily.textContent = "家族"
  myNameAnswer.textContent = me.name.jap
  livingEreaAnswer.textContent = me.living.jap
  schoolYearAnswer.textContent = me.university.class.jap
  schoolNameAnswer.textContent = me.university.name.jap
  myFamilyAnswer.textContent = me.family.jap
  food.textContent = "食べ物"
  color.textContent = "色"
  animal.textContent = "動物"
  youtuber.textContent = "ユーチューバー"
  foodAnswer.textContent = like.food.jap
  colorAnswer.textContent = like.color.jap
  animalAnswer.textContent = like.animal.jap
  youtuberAnswer.textContent = like.youtuber

  moreCon1.textContent = more.character.jap
  moreCon2.textContent = more.hobby.jap
  }
}

