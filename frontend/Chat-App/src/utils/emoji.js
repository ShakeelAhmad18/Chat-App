const funEmoji=[
    '👨','👨','👨','👨‍🦰','👸','🤴','👮‍♀️','👼'
]


export const generateFunEmoji=()=>{
    return funEmoji([Math.floor(Math.random() * funEmoji.length)])
}