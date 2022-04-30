
function get(element)
{
    return document.getElementById(element);
}

var suggestions = [];


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//Runs when frist loaded and adds premade data


window.addEventListener('load', function() 
{
    populateHome(entrytitle(1), entrytext(1));
    makeTitle(entrytitle(2));
    makeList(entrytext(2));
    makeList(entrytext(3));
    makeTitle(entrytitle(3))
    makeList(entrytext(4));
    makeList(entrytext(5));
    makeTitle(entrytitle(4));

    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openreviews);
    cancelButton.addEventListener('click', closereviews);
    saveButton.addEventListener('click', addSuggestion);
})

function init()
{
    document.getElementById('active-list').onclick = completeSuggestion;
    document.getElementById('save-button').onclick = clickButton;
}

function populateHome(titlein, textin)
{
    var title = titlein;
    var text = textin;
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);
}

function makeList(textin)
{
    var text = textin
    var content = get('display-content');

    var newlist = document.createElement('li');
    var newlisttext = document.createTextNode(text);

    newlist.appendChild(newlisttext);
    content.appendChild(newlist);
}

function makeTitle(titlein)
{
    var title = titlein;
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title);

    newTitle.appendChild(newTitleText);
    content.appendChild(newTitle);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~typed data


function entrytitle(num)
{
    var title = ' ';
    if (num == 1)
    {
        return title = 'Boy Scouts';
    }
    if (num == 2)
    {
        return title = 'High School';
    }
    if(num == 3)
    {
        return title = 'MATC';
    }
    if(num == 4)
    {
        return title = 'Suggestions ?';
    }
    return title;
}

function entrytext(num)
{
    var text = ' ';
    if (num == 1)
    {
        return text = 'I was part of the Boy Scouts of America  for 8 years. Most of the time was spent camping and doing community service. I was the Senior patrol leader for two years. During  my time I organized the camping trips with the other scouts and adults. I also over the transition of the troop being adult lead to scout lead. The experience taught me how to be an effective leader by commentating in different ways, and being honest with everyone I’m leading.';
    }
    if (num == 2)
    {
        return text = 'Focused on IT and business classes';
    }
    if (num == 3)
    {
        return text = 'One year on the robotics club ';
    }
    if (num == 4)
    {
        return text = 'Originally part of the matc bissines programe';
    }
    if (num == 5)
    {
        return text = 'Now enrolled in the program and software and web development';
    }
    return text;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~changing the image


function changeImage() 
{   
    var profilepic = document.getElementById('profilepic');
    if (profilepic.src.match("../Jason_Hicks_P2/pic/Myself.JPG")) 
    {
        profilepic.src = "../Jason_Hicks_P2/pic/Cat.JPG";
        profilepic.alt="Cat drinking out of a chalice"
    }
    else 
    {
        profilepic.src = "../Jason_Hicks_P2/pic/Myself.JPG";
        profilepic.alt="myself"
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Suggestion
var suggestionStatus = 
{
    active: 'active',
    completed: 'completed'
};

function Suggestion (id, name, status) 
{
    this.id = id;
    this.name = name;
    this.status = status;
}

function addSuggestion (event)
{
    var inputEl = get('edit-content-text');
    if (inputEl.value !='')
    {
        var id = 'item-' + suggestions.length;
        var suggestion = new Suggestion(id, inputEl.value, suggestionStatus.active);
        suggestions.push(suggestion);
        addSuggestionElement(suggestion);
        inputEl.value='';
    }
    closereviews();
}

function addSuggestionElement (suggestion) 
{
    var listEl = document.getElementById('active-list');
    var suggestionEl = document.createElement('li');
    var textEl = document.createTextNode(suggestion.name);

    suggestionEl.setAttribute('id', suggestion.id);
    suggestionEl.appendChild(textEl);
    listEl.appendChild(suggestionEl);
}

function completeSuggestion (event)
{
    var suggestionEl = event.target;
    var id = suggestionEl.id;

    for(var count=0; count < suggestions.length; count++)
    {
        if (suggestions[count].id === id) 
        {
            suggestions[count].status = suggestionStatus.completed;
            break;
        }
    }
    suggestionEl.remove();
    document.getElementById('completed-list').appendChild(suggestionEl);
}

function clickButton (event)
{
    if(event.keyCode === 13)
    {
        document.getElementById('save-button').click();
    }
}

function openreviews()
{
    var reviews = get('reviews-dialog');
    var backdrop = get('reviews-backdrop')
    
    reviews.classList.add('visible');
    backdrop.classList.add('visible')
}

function closereviews()
{
    var text = get('edit-content-text');
    var reviews = get('reviews-dialog');
    var backdrop = get('reviews-backdrop');

    text.value = '';

    reviews.classList.remove('visible');
    backdrop.classList.remove('visible');
}


init();