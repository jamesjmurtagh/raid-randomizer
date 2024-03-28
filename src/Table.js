import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'

export default function Table() {
    
    const classes = [
        {
            "name": "Death Knight",
            "color": "#C41F3B",
            "specs": [
                {
                    "name": "Blood",
                    "role": "Tank"
                },{
                    "name": "Frost",
                    "role": "DPS"
                },{
                    "name": "Unholy",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Demon Hunter",
            "color": "#A330C9",
            "specs": [
                {
                    "name": "Havoc",
                    "role": "DPS"
                },{
                    "name": "Vengeance",
                    "role": "Tank"
                }
            ]
        },{
            "name": "Druid",
            "color": "#FF7D0A",
            "specs": [
                {
                    "name": "Balance",
                    "role": "DPS"
                },{
                    "name": "Feral",
                    "role": "DPS"
                },{
                    "name": "Guardian",
                    "role": "Tank"
                },{
                    "name": "Restoration",
                    "role": "Healer"
                }
            ]
        },{
            "name": "Evoker",
            "color": "#33937F",
            "specs": [
                {
                    "name": "Augmentation",
                    "role": "DPS"
                },{
                    "name": "Devastation",
                    "role": "DPS"
                },{
                    "name": "Preservation",
                    "role": "Healer"
                }
            ]
        },{
            "name": "Hunter",
            "color": "#ABD473",
            "specs": [
                {
                    "name": "Beast Mastery",
                    "role": "DPS"
                },{
                    "name": "Marksmanship",
                    "role": "DPS"
                },{
                    "name": "Survival",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Mage",
            "color": "#40C7EB",
            "specs": [
                {
                    "name": "Arcane",
                    "role": "DPS"
                },{
                    "name": "Fire",
                    "role": "DPS"
                },{
                    "name": "Frost",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Monk",
            "color": "#00FF96",
            "specs": [
                {
                    "name": "Brewmaster",
                    "role": "Tank"
                },{
                    "name": "Mistweaver",
                    "role": "Healer"
                },{
                    "name": "Windwalker",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Paladin",
            "color": "#F58CBA",
            "specs": [
                {
                    "name": "Holy",
                    "role": "Healer"
                },{
                    "name": "Protection",
                    "role": "Tank"
                },{
                    "name": "Retribution",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Priest",
            "color": "#FFFFFF",
            "specs": [
                {
                    "name": "Discipline",
                    "role": "Healer"
                },{
                    "name": "Holy",
                    "role": "Healer"
                },{
                    "name": "Shadow",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Rogue",
            "color": "#FFF569",
            "specs": [
                {
                    "name": "Assassination",
                    "role": "DPS"
                },{
                    "name": "Outlaw",
                    "role": "DPS"
                },{
                    "name": "Subtlety",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Shaman",
            "color": "#0070DE",
            "specs": [
                {
                    "name": "Elemental",
                    "role": "DPS"
                },{
                    "name": "Enhancement",
                    "role": "DPS"
                },{
                    "name": "Restoration",
                    "role": "Healer"
                }
            ]
        },{
            "name": "Warlock",
            "color": "#8787ED",
            "specs": [
                {
                    "name": "Affliction",
                    "role": "DPS"
                },{
                    "name": "Demonology",
                    "role": "DPS"
                },{
                    "name": "Destruction",
                    "role": "DPS"
                }
            ]
        },{
            "name": "Warrior",
            "color": "#C79C6E",
            "specs": [
                {
                    "name": "Arms",
                    "role": "DPS"
                },{
                    "name": "Fury",
                    "role": "DPS"
                },{
                    "name": "Protection",
                    "role": "Tank"
                }
            ]
        }
    ]
    function initSpecs() {
        const output = [];
        for (let i = 0; i < classes.length; i++) {
            for (let j = 0; j < classes[i].specs.length; j++) {
                output.push({
                    option: classes[i].specs[j].name,
                    role: classes[i].specs[j].role,
                    style: {
                        backgroundColor: classes[i].color,
                        fontSize: 14,
                        textColor: classes[i].name == "Priest" ? "#000000" : "#ffffff"
                    }
                })
            }
        }

        // shuffle order of output array
        for (let i = output.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = output[i];
            output[i] = output[j];
            output[j] = temp;
        }
        return output;
    }

    function genWinIndex() {
        const i = Math.floor(Math.random() * specs.length);
        const spec = specs[i];
        let numberOfAssignedPlayersWithThisRole = 0;

        for (let i = 0; i < playerAssignments.length; i++) {
            if (playerAssignments[i].role == spec.role) {
                numberOfAssignedPlayersWithThisRole++;
            }
        }

        console.log(spec.role)
        switch (spec.role) {
            case "Tank":
                if (numberOfAssignedPlayersWithThisRole >= maxTanks) {
                    return genWinIndex();
                }
                break;
            case "Healer":
                if (numberOfAssignedPlayersWithThisRole >= maxHealers) {
                    return genWinIndex();
                }
                break;
            // case "DPS":
            //     if (numberOfAssignedPlayersWithThisRole >= maxDps) {
            //         return genWinIndex();
            //     }
            //     break;
        }

        return Math.floor(Math.random() * specs.length);
    }

    // Set state variable for playerAssignments
    const [playerAssignments, setPlayerAssignments] = useState([]);
    const [specs, setSpecs] = useState(initSpecs);
    const [spin, setSpin] = useState(false);
    const [winIndex, setWinIndex] = useState(Math.floor(Math.random() * specs.length));
    const [maxTanks, setMaxTanks] = useState(1);
    const [maxHealers, setMaxHealers] = useState(1);
    const [maxDps, setMaxDps] = useState(14);

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            addName();
        }
    }

    const addName = () => {
        // Get value of name input
        const nameInput = document.getElementById('nameInput');

        // Disable name input
        nameInput.disabled = true;

        // Set spin to true
        setSpin(true);
    }

    const rows = playerAssignments.map(player => {
        return (
            <tr key={player.name} style={{backgroundColor: player.color}}>
                <td style={{border: "solid 1px black"}}>{player.name}</td>
                <td style={{border: "solid 1px black"}}>{player.spec}</td>
            </tr>
        );
    });

    const prizeNumber = Math.floor(Math.random() * specs.length);

    return (
        <div style={{display: "flex"}}>
            <div style={{flex: "auto", display: "flex", flexDirection: "column"}}>
                <div>
                    <input type="text" id="nameInput" placeholder="Enter Name" onKeyDown={handleEnterPress}/>
                </div>
                <table id="namesTable" >
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
            <div style={{flex: "auto"}}>
                <Wheel 
                    mustStartSpinning={spin}
                    prizeNumber={prizeNumber}
                    data={specs}
                    backgroundColors={['#3e3e3e', '#df3428']}
                    textColors={['#ffffff']}
                    onStopSpinning={() => {
                        setSpin(false);
                        const x = [];
                        const spec = specs[prizeNumber];
                        const nameInput = document.getElementById('nameInput');
                        const name = nameInput.value;

                        for (let i = 0; i < playerAssignments.length; i++) {
                            x.push(playerAssignments[i]);
                        }
                        x.push({
                            name: name,
                            spec: spec.option,
                            role: spec.role,
                            color: spec.style.backgroundColor
                        })

                        setPlayerAssignments(x);
                        
                        const newSpecs = [];
                        for (let i = 0; i < specs.length; i++) {
                            if (specs[i].option !== spec.option) {
                                newSpecs.push(specs[i]);
                            }
                        }
                        setSpecs(newSpecs);
                        nameInput.value = "";
                        nameInput.disabled = false;

                        setWinIndex(genWinIndex());
                    }}
                />
            </div>
        </div>

    );
}