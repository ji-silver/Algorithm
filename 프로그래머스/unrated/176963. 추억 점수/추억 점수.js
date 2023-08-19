function solution(name, yearning, photo) {

    return photo.map(x => x.reduce((acc, person) =>
        acc + (name.includes(person) ?
            yearning[name.indexOf(person)] : 0), 0))
} 