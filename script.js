// function addTwoNumber(numb1,numb2){
// return numb1+numb2;
// }
// addTwoNumber(2,2);

// function cube(numb1){
//     return numb1*numb1*numb1;
// }
// cube();



// function check(name) {
//     let input = document.querySelector("input").value;
//     if (input == document.querySelector("input").value)
//         alert("welcome"+ " @ "+document.querySelector("input").value);
// }
// // check("jamila")


// function greeting(name) {
//     alert ("welcome," + name + "!");
// };
// greeting();


// function cube(numb1) {
//     return numb1 * numb1 * numb1;
// }
// cube(2);
// function multiply(numb1, numb2) {
//     return numb1 * numb2;
// }
// multiply(2, 4);

// function divideTwoNumber(numb1, numb2) {
//     return numb1 % numb2;
// }
// divideTwoNumber()


// function check(name) {
//     let input = document.querySelector('input').value;
//     if (input === document.querySelector('input').value) {
//         return "welcome" + name;
//     }
// }
// check("jamila")


// function check(name){
//    let input = document.querySelector('input').value;
//     if(input==input){
//         alert("welcome:"+name +" ! ");
//     }

// }
// check()


let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
];

/*
Print each video in this format:


Title: Photoshop tutorial
Length: 70 minutes
Category: Education
Views: 4,700
Uploaded On: 22-July-2019
Rating: 
*/




for (let i = 0; i < videos.length; i++) {
    console.log("title:" +
        videos[i].title +
        "\nlength:" +
        videos[i].lengthInMinutes +
        "\ncategory:" +
        videos[i].category +
        "\nviews:" +
        videos[i].viewCount +
        "\n uploadOnDate:"
        + videos[i].uploadDate +
        "\nrating:" +
        videos[i].rating);
}

for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 3)
        console.log("title of long videos:" + videos[i].title);
}

// Print titles of all medium length videos.

for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes <= 20) {
        console.log("medium length videos:" + videos[i].title)
    }

}

/*Print title of the longest video
Print titles of all "Educational" videos
Print titles of all videos with tag "Javascript"
Print titles of all videos with HD feature
Print titles of all videos uploaded today
Print titles of all videos uploaded this week */


for (let i = 0; i < videos.length; i++) {
    if (videos[i].category == "Education") {
        console.log("educational videos:" + videos[i].title);
    }
}

for (i = 0; i < videos.length; i++) {
    if (videos[i].tags == "javascript, loops, web development") {
        console.log("js tags videos:" + videos[i].title);
    }
}
for (i = 0; i < videos.length;i++) {
    if (videos[i].features[1] == "HD") {
        console.log("hd feature:" + videos[i].title);
    }
}




// for (let i = 0; i < videos.length; i++) {
//     let fullDate = videos[i].uploadDate;

//     console.log("Title: " +
//         videos[i].title +
//         "\nLength: " +
//         videos[i].lengthInMinutes +
//         " minutes\nCategory: " +
//         videos[i].category +
//         "\nViews: " +
//         videos[i].viewCount.toLocaleString() +
//         "\n" +
//         fullDate.getDate() +
//         "-" + months[fullDate.getMonth()] +
//         "-" + fullDate.getFullYear() +
//         "\nRating: " +
//         videos[i].rating
//     );

// }