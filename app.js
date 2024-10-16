days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
months = ['january','february','march','april','may','june','july','august','september','october','november','december'];

for(m = 0; m <= 11; m++){
    const month = document.createElement('div');
    const monthNum = document.createElement('h1');
    monthNum.innerHTML = months[m];
    month.id = 'month_'+m;
    month.className = 'month';
    document.getElementById('calenderId').appendChild(month);
    document.getElementById('month_'+m).appendChild(monthNum);
for(w = 1; w <= 4; w++){
    const week = document.createElement('div')
    week.id = 's'+m+'month_week'+w;
    week.className = 'week'
    document.getElementById('month_'+m).appendChild(week);

for(d = 0; d <= 6; d++){
    const day = document.createElement('div');
    day.innerHTML = d+1
    day.id = 'day'+ d
    day.className = 'day'
    document.getElementById('s'+m+'month_week'+w).appendChild(day)



    // console.log(months[m]+' '+w+' '+days[d]);
}
}
}





