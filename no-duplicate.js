 //find no duplicate items in an array
 
 function noDuplicate (arr) {
    // console.log(arr) 
    let newArr = [];
    for (const friend of friends) {
        // console.log(friend);
        if (newArr.includes(friend) === false) {
            newArr.push(friend)
        }
    }
    return newArr;

 }

 const friends = ['Shadhin', 'Mahim', 'Ashik', 'Shadhin', 'Rakib', 'Mahim', 'Siam', 'Rakib']
 const unique = noDuplicate(friends)
 console.log(unique)