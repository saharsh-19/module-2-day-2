for(var i=0;i<10;i++)
{
    if(i%2==0)
    {
        console.log(i,"is even");
    }
    else
    {
        //continue; //if we want to print even only
        console.log(i,"is odd");
        if(i==7)
        {
            break;
        }
    }
}