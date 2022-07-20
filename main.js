const me = {name:{jap:"勝本麗香",eng:"Reika Katsumoto"},living:{jap:"横浜",eng:"Yokohama"},university: { name: {jap:"上智大学",eng:"Sophia University"}, class: {jap:"三年",eng:"Three"}},hobbies: {jap:["料理", "旅行", "映画"],eng:["Cooking","Traveling","Movie"]},character:{jap:["明るい","能天気","友好的"],eng:["Cheerful","Easygoing","Friendly"]},family:{jap:"父、母、妹",eng:"father,mother,sister"}}
const like ={food:{jap:"パイナップル",eng:"Pineapple"},color:{jap:"若草色",eng:"Light green"},animal:{jap:"パンダ",eng:"Panda"}}

let mainTitle = document.getElementById("maintitle")
let subTitle =document.getElementById("subtitle")
let mainInformation = document.getElementById("main-information")
let whatILike = document.getElementById("what-I-like")
let languageButton = document.getElementById("language-button")
let profileButton = document.getElementById("profile-button")
let myname = document.getElementById("my-name")
let livingErea = document.getElementById("living-erea")
let schoolYear = document.getElementById("school-year")
let schoolName = document.getElementById("school-name")
let myCharacter = document.getElementById("my-character")
let myHobby = document.getElementById("my-hobby")
let myFamily = document.getElementById("my-family")
let myNameAnswer = document.getElementById("my-name-answer")
let livingEreaAnswer = document.getElementById("living-erea-answer")
let schoolYearAnswer = document.getElementById("school-year-answer")
let schoolNameAnswer = document.getElementById("school-name-answer")
let myCharacteAnswer = document.getElementById("my-character-answer")
let myHobbyAnswer = document.getElementById("my-hobby-answer")
let myFamilyAnswer = document.getElementById("my-family-answer")

let likeButton = document.getElementById("like-button")
let food = document.getElementById("food")
let color = document.getElementById("color")
let animal = document.getElementById("animal")
let foodAnswer = document.getElementById("food-answer")
let colorAnswer = document.getElementById("color-answer")
let animalAnswer = document.getElementById("animal-answer")

profileButton.onclick = function(){
      myNameAnswer.textContent=me.name.jap
      livingEreaAnswer.textContent=me.living.jap
      schoolYearAnswer.textContent=me.university.class.jap
      schoolNameAnswer.textContent=me.university.name.jap
      myCharacteAnswer.textContent=me.character.jap
      myHobbyAnswer.textContent=me.hobbies.jap
      myFamilyAnswer.textContent=me.family.jap
    }
likeButton.onclick = function(){
  foodAnswer.textContent = like.food.jap
  colorAnswer.textContent = like.color.jap
  animalAnswer.textContent = like.animal.jap
}

languageButton.onclick = function () {
  if(languageButton.textContent=="日本語"){
  languageButton.textContent="Enlish"
  
  mainTitle.textContent = "Reika Katsumoto"
  subTitle.textContent = "My First Portfolio"
  mainInformation.textContent ="Profile"
  whatILike.textContent = "I like..."
  profileButton.textContent = "View"
  likeButton.textContent = "View"

  myname.textContent = "Name"
  livingErea.textContent="Living in"
  schoolYear.textContent="Grade"
  schoolName.textContent="School"
  myCharacter.textContent="Personality"
  myHobby.textContent="Hobbies"
  myFamily.textContent="Family"
  myNameAnswer.textContent=me.name.eng
  livingEreaAnswer.textContent=me.living.eng
  schoolYearAnswer.textContent=me.university.class.eng
  schoolNameAnswer.textContent=me.university.name.eng
  myCharacteAnswer.textContent=me.character.eng
  myHobbyAnswer.textContent=me.hobbies.eng
  myFamilyAnswer.textContent = me.family.eng
  food.textContent = "Food"
  color.textContent = "Color"
  animal.textContent = "Animal"
  foodAnswer.textContent = like.food.eng
  colorAnswer.textContent = like.color.eng
  animalAnswer.textContent = like.animal.eng
  } else{
  languageButton.textContent="日本語"

  mainTitle.textContent = "勝本麗香"
  subTitle.textContent = "初めてのWeb開発!"
  mainInformation.textContent ="基本情報"
  whatILike.textContent = "好きなものシリーズ"
  profileButton.textContent = "見る👀"
  likeButton.textContent = "見る👀"
  
  myname.textContent = "名前"
  livingErea.textContent="所在"
  schoolYear.textContent="学年"
  schoolName.textContent="大学"
  myCharacter.textContent="性格"
  myHobby.textContent="趣味"
  myFamily.textContent="家族"
  myNameAnswer.textContent=me.name.jap
  livingEreaAnswer.textContent=me.living.jap
  schoolYearAnswer.textContent=me.university.class.jap
  schoolNameAnswer.textContent=me.university.name.jap
  myCharacteAnswer.textContent=me.character.jap
  myHobbyAnswer.textContent=me.hobbies.jap
  myFamilyAnswer.textContent=me.family.jap
  food.textContent = "食べ物"
  color.textContent = "色"
  animal.textContent = "動物"
  foodAnswer.textContent = like.food.jap
  colorAnswer.textContent = like.color.jap
  animalAnswer.textContent = like.animal.jap
  }
}
