

export const nbrJoure=(dateDepart,dateReturn)=>{
        console.log(dateDepart)
        console.log(dateReturn)
        let defMs=dateReturn.getTime() - dateDepart.getTime()
        let defDays=Math.floor( defMs/(1000 * 3600 * 24))
        return defDays+2
}