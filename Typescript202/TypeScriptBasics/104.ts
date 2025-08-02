// Create a new file lesson4.ts and do the following:

// Create a type called Developer with name (string), skills (string[]), and isFrontend (boolean).

// Create a type called Designer with name (string), tools (string[]), and isUIUX (boolean).

// Create a union called TeamMember that can be either Developer or Designer.

// Create a function that takes a TeamMember and prints different things based on the type:

// If they have skills, log "Dev Skills:"

// If they have tools, log "Designer Tools:"

type Developer = {
    name : string,
    skills : string[],
    isFrontend : boolean
}

type Designer = {
    name : string,
    tools : string[],
    isUIUX : boolean
}

type TeamMember = Developer | Designer

const member : TeamMember = {
    name : "dipanshu",
    tools : ["pluto", "jupiter"],
    isUIUX : true
}

function Identify(obj : TeamMember)
{
    if(obj.hasOwnProperty("tools"))
    {
        console.log("This is a designer")
    }

    else{
        console.log("This is a Developer")
    }
} 

Identify(member)