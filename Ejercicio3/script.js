document.getElementById('filterButton').addEventListener('click', function() {
    const array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
    const onlyNumbers = array.filter(item => typeof item === 'number');

    onlyNumbers.forEach(number => console.log(number));
});
