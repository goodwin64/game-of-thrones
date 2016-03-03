function gameOfThrones(troops) {
    var wildlingsHP = +(troops[0].split(':')[1]) * 10;

    /* initializing lands and soldiers_groups */
    var soldiersGroups = [];
    var land;
    var i;
    for (i = 1; i < troops.length; i++) {
        land = troops[i];
        var landParams = land.split(':');
        var landName = landParams[0];
        var landArmy = +(landParams[landParams.length-1]);
        if (~landParams.indexOf("in"))
            landAlliance = true;
        else
            landAlliance = false;

        soldiersGroups.push({   
                name: landName,
                army: landArmy,
                alliance: landAlliance,
                baseHP: 5,
                bonusHP: 0  });
    }

    /* move armies by allies to the north */
    for (i = soldiersGroups.length-1; i > 0; i--) {
        if (soldiersGroups[i].alliance && soldiersGroups[i-1].alliance) {
            legUp = soldiersGroups[i].army;
            soldiersGroups[i].army -= legUp;
            soldiersGroups[i-1].army += legUp;
            soldiersGroups[i-1].bonusHP = soldiersGroups[i].bonusHP + 1;
        }
    }

    /* time to battle */
    var group;
    for (i in soldiersGroups) {
        group = soldiersGroups[i];
        wildlingsHP -= group.army * (group.baseHP + group.bonusHP);
        if (wildlingsHP <= 0) {
            if (group.alliance) {
                return "Alliance won!";
            }
            return ["Wildlings were stopped at house ", group.name, "!"].join("");
        }
    }
    return "Wildlings conquered the seven kingdom!";
}
