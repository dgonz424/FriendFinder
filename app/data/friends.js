// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
{
"name": "Dan",
"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdPAAAAJDU5ODQwZTZmLTFmNWEtNDRlYS04ODgzLTVmZjQ2M2M1MTdjMw.jpg",
"scores": [
"5",
"1",
"4",
"4",
"5",
"1",
"2",
"5",
"4",
"1"
]
},
{
"name": "Will",
"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/065/2a9/2a0b0c6.jpg",
"scores": [
"3",
"2",
"1",
"4",
"5",
"1",
"1",
"2",
"3",
"4"
]
},
{
"name": "JenWin",
"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/078/113/1ea5f1a.jpg",
"scores": [
"2",
"3",
"5",
"2",
"1",
"2",
"4",
"2",
"1",
"5"
]
},
{
"name": "JenPem",
"photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcwAAAAJDM3ZDkyMDQzLTYxMDQtNDkxYi05OGM5LTNlYzU1NjBlNTU4OQ.jpg",
"scores": [
"4",
"1",
"1",
"1",
"3",
"3",
"1",
"5",
"4",
"4"
]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;