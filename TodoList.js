let array=JSON.parse(localStorage.getItem('array'))||[];
    cal();
    function cal()
    {
      let to='';
      for (let i=0;i<array.length;i++)
      {
        let obj=array[i];
        const {name,time}=obj;
        const cont= `
          <div class='get'>${name}<input type='checkbox' class='check'></div>
          <div class='get'>${time}</div>
          <button onclick="
          array.splice(${i},1);
          cal();
          save();"
          class='dele'>Delete</button>`;
        to+=cont;
        
      }

      document.querySelector('.divel').innerHTML=to;
    }
    function func()
    {
      const name=document.querySelector('.todo').value;
      const time=document.querySelector('.date').value;
      array.push({name,time});
      document.querySelector('.todo').value='';
      document.querySelector('.date').value='';
      save();
      cal();
    }
    function save()
    {
      localStorage.setItem('array',JSON.stringify(array))
    }