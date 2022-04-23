let team_img_element = document.getElementById("image");
let team_title_element = document.getElementById("text");
let team_members = [
  {
    tittle: "member1",
    img: "t1.jpeg",
  },

  {
    tittle: "member2",
    img: "t1.jpeg",
  },

  {
    tittle: "member3",
    img: "t1.jpeg",
  },

  {
    tittle: "member4",
    img: "t1.jpeg",
  },
];
let turn = 0;
function moveTeamMember() {
  if (turn < team_members.length) {
    team_img_element.src = team_members[turn].img;
    team_title_element.textContent = team_members[turn].tittle;
    turn++;
  } else {
    turn = 0;
    moveTeamMember();
  }
}
