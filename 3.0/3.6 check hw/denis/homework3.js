let sum = 0;
let number = 10000;
let chekThreeElements=0;

while(number<=150000)
{
    chekThreeElements = number * 3 - 6;
    if(chekThreeElements%100==52 && chekThreeElements.toString()[1]==2)
    {
        console.log("Число, которое проходит проверку - " + number);
    }
    number++;
}

