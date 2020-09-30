//CLASSES & ARCHETYPES START
function classPage() {
        

    var barbarian = {
        hd: "1d12" ,
        hp1stlvl: "12",
        hphigherlvl: "1d12 (or 7) + your Constitution modifier per Barbarian",
        armorprof: "light armor, medium armor, shields.",
        weaponprof: "simple weapons, martial weapons.",
        skillandtools: "two",
        className: "Barbarian",
        classAdditionalFeatures: ["Rages", "Rage Damage"],
        features: ["Rage, Unarmored Defense", "Danger Sense, Survival Instincts, Reckless Attack","Primal Path","Ability Score Improvement","Extra Attack, Fast Movement, Instinctive Pounce","Path Feature","Feral Instinct","Ability Score Improvement","Brutal Critical (1 die)","Path Feature","Relentless Rage","Ability Score Improvement","Brutal Critical (2 dice)","Path Feature","Persistent Rage","Ability Score Improvement","Brutal Critical (3 dice)","Indomitable Might","Ability Score Improvement","Primal Champion"],
        extraFeatures: [["2","+2"],["2","+2"],["3","+2"],["3","+2"],["3","+2"],["4","+2"],["4","+2"],["4","+2"],["4","+3"],["4","+3"],["4","+3"],["5","+3"],["5","+3"],["5","+3"],["5","+3"],["5","+4"],["6","+4"],["6","+4"],["6","+4"],["Unlimited","+4"]],
        featuresDesc:['<tr><td><span class="class-feature-title">Rage</span><p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren\'t wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>Rage affects the mind in a way that makes focused thought difficult. While raging, you cannot switch your Psionic Focus or use any effects that require concentration. Any active disciplines requiring your concentration immediately end and their effects dissipate. However, you can activate psionic abilities from disciplines from the Immortal Order that do not require concentration. You also can maintain your rage by attacking enemies with psionic abilities within the Immortal Order.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you have not attacked a hostile creature since your last turn or taken damage since then. Activities that  qualify for attacking a hostile creature includes weapon attacks, aggressive actions such as grappling, and targeted psionic attacks within the Immortal Order. You can also end your rage on your turn as a bonus action. Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.</p></td></tr>','<tr><td><span class="class-feature-title">Unarmored Defense</span><p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p></td></tr>','<tr><td><span class="class-feature-title">Danger Sense</span><p>At 2nd level, you gain an uncanny sense of when things nearby aren\'t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can\'t be blinded, deafened, or incapacitated.</p></td></tr>','<tr><td><span class="class-feature-title">Naturalist</span><p><i>2nd-level barbarian feature (replaces Danger Sense)</i></p><p>You become proficient in your choice of two of the following skills: Animal Handling, Medicine, Nature, Perception, or Survival.</p><p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p></td></tr>','<tr><td><span class="class-feature-title">Reckless Attack</span><p>Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.</p></td></tr>','<tr class="archetype-features"><td><span class="class-feature-title">Primal Path</span><p>At 3rd level, you choose a path that shapes the nature of your rage from the list of available paths. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack</span><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p></td></tr>','<tr><td><span class="class-feature-title">Fast Movement</span><p>Starting at 5th level, your speed increases by 10 feet while you aren\'t wearing heavy armor.</p></td></tr>','<tr><td><span class="class-feature-title">Instinctive Pounce</span><p><i>5th-level barbarian feature (replaces Fast Movement)</i></p><p>When a creature ends its turn within 15 feet of you, you can use your reaction to move up to half your speed to a space closer to the creature. This movement doesn\'t provoke opportunity attacks.</p></td></tr>','<tr class="archetype-features"><td><span class="class-feature-title">Path Feature</span><p>At 6th level, you gain a feature from your Primal Path.</p></td></tr>','<tr><td><span class="class-feature-title">Feral Instinct</span><p>By 7th level, your instincts are so honed that you have advantage on initiative rolls.</p><p>Additionally, if you are surprised at the beginning of combat and aren\'t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM uses the optional Feats, you can instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Brutal Critical (1 die)</span><p>Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.</p><p>This increases to two additional dice at 13th level and three additional dice at 17th level.</p></td></tr>','<tr class="archetype-features"><td><span class="class-feature-title">Path Feature</span><p>At 10th level, you gain a feature from your Primal Path.</p></td></tr>','<tr><td><span class="class-feature-title">Relentless Rage</span><p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you\'re raging and don\'t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.</p><p>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM uses the optional Feats, you can instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Brutal Critical (2 dice)</span><p>At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.</p><p>This increases to three additional dice at 17th level.</p></td></tr>','<tr class="archetype-features"><td><span class="class-feature-title">Path Feature</span><p>At 14th level, you gain a feature from your Primal Path.</p></td></tr>','<tr><td><span class="class-feature-title">Persistent Rage</span><p>Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM uses the optional Feats, you can instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Brutal Critical (3 dice)</span><p>At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.</p></td></tr>','<tr><td><span class="class-feature-title">Indomitable Might</span><p>Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM uses the optional Feats, you can instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Primal Champion</span><p>At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.</p></td></tr>'],
        archetypes:[{
            archetypeName: "Path of the Ancestral Guardian",
            archetypeFeatures: ["Ancestral Protectors","Spirit Shield","Guided by the Spirits","Vengeful Ancestors"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Ancestral Guardian</span><p>Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.</p><p>Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. To cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors\' deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Ancestral Protectors</span><p>Spectral warriors appear when you enter your rage. While raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn\'t against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Spirit Shield</span><p>The guardian spirits that aid you can provide protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can expand your mind to reduce their pain. You may use your reaction to reduce that damage by 2d6.</p><p>When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.</p></p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Guided by the Spirits</span><p>Your ancestral spirits guide you in battle and help you foresee danger. You may use a bonus action to receive momentary insights to improve your odds of success. For the next minute, whenever you make an attack roll, a saving throw, or an ability check, you roll a d4 and add it to the total. Once you use this ability, you cannot do so again until you complete a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Vengeful Ancestors</span><p>Your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of psychic damage equal to the damage that your Spirit Shield prevents.</p></td></tr>']
        },{
            archetypeName: "Path of the Battlerager",
            archetypeFeatures: ["Battlerager Armor","Reckless Abandon","Battlerager Charge","Spiked Retribution"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Battlerager</span><p>Battleragers barbarians specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Battlerager Armor</span><p>When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.</p><p>While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.</p><p>Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Reckless Abandon</span><p>Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Battlerager Charge</span><p>Beginning at 10th level, you can take the Dash action as a bonus action while you are raging.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Spiked Retribution</span><p>Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren\'t incapacitated, and are wearing spiked armor.</p></td></tr>']
        },{ 
            archetypeName: "Path of the Beast",
            archetypeFeatures: ["Form of the Beast","Bestial Soul","Infectious Fury","Call the Hunt"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Beast</span><p>Barbarians who walk the Path of Beast draw their rage from a bestial spark burning within their souls. That beast howls to be released and bursts forth in the throes of rage.</p><p>Those who tread this path might be inhabited by a primal spirit or descended from shapeshifters. You can choose the origin of your feral might or determine it randomly by rolling on the following table.</p><table class="table table-striped table-bordered"><th class="text-center">d4</th><th>Origin</th></tr><tr><td class="text-center">1</td><td>A Sundering Storm tainted you with twisted bestial abilities and characteristics.</td></tr><tr><td class="text-center">2</td><td>You are descended from a legendary druid who lived before the Sundering, and this ancestor’s powers flow through your veins.</td></tr><tr><td class="text-center">3</td><td>An ancestral spirit gifted you with the ability to adopt different bestial aspects.</td></tr><tr><td class="text-center">4</td><td>An ancient animal spirit dwells within you, allowing you to walk this path.</td></tr></table></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Form of the Beast</span><p>You can transform when you enter your rage, revealing the bestial power within you. Until your rage ends, you manifest a natural weapon (melee), choosing one of the following options each time you rage:</p><p>Bite. Your mouth transforms into a bestial snout or great mandibles (your choice). Your bite deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with your bite, you regain a number of hit points equal to your Constitution modifier (minimum of 1 hit point).</p><p>Claws. Your hands transform into claws which deal 1d6 slashing damage on a hit. When you take the Attack action on your turn and make an attack with your claws, you can make one additional attack using your claws as part of the same action.</p><p>Tail. You grow a lashing, spiny tail, which deals 1d12 piercing damage on a hit and has the reach property.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Bestial Soul</span><p>The feral spirit within you grows in power. You can call on the feral spirit to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:</p><ul><li>You gain a swimming speed equal to your walking speed, and you can breathe underwater.</li><li>You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</li><li>When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check\'s total. You can make this special check only once per turn.</li></ul></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Infectious Fury</span><p>Your natural weapons become infused with your rabid fury. While you are raging and hit a target with your natural weapon, the target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the two effects (your choice):</p><ul><li>The target must use its reaction to make a melee attack against another creature of your choice that you can see.</li><li>Target takes 2d12 psychic damage. You can use this feature a number of times equal to your Constitution modifier (a minimum of once).</li></ul><p>You regain all expended uses when you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Call the Hunt</span><p></p>The beast within grows so powerful that you can spread its ferocity to your allies. When you enter your rage, you can choose a number of willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature).<p>Until your rage ends, the chosen creatures gain the Reckless Attack feature and you have advantage on saving throws against being frightened. You also gain 5 temporary hit points for each creature that accepts the benefit. You can use this feature a number of times equal to your Constitutionmodifier (a minimum of once). You regain all expended uses when you finish a long rest.</p></td></tr>']
        },{
            archetypeName: "Path of the Berserker",
            archetypeFeatures: ["Frenzy","Mindless Rage","Intimidating Presence","Retaliation"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Berserker</span><p>For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker\'s rage, you thrill in the chaos of battle, heedless of your own health or well-being.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Frenzy</span><p>Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Mindless Rage</span><p>Beginning at 6th level, you can\'t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Intimidating Presence</span><p>Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.</p><p>If the creature succeeds on its saving throw, you can\'t use this feature on that creature again for 24 hours.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Retaliation</span><p>Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.</p></td></tr>']
        },{
            archetypeName: "Path of the Primal Warrior",
            archetypeFeatures: ["Brutality","Brutalities","Animal Instincts","Robust Constitution","Massive Weapon Fighting"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Primal Warrior</span><p>The primal warrior hails from the remote and most sundered regions of the world where monstrous aberrations are common. Your fury is truly primal, and your methods unrefined, but you may stand tall atop the primordial food chain among the strongest creatures ever to have lived.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Brutality</span><p>You have a number of Brutality Points with which you can spend to overwhelm your enemies with Brutalities. At 3rd level, you have 2 Brutality Points. This increases to 3 at 6th, 4 at 10th, and 5 at 14th level. You recover all expended brutality points when you finish a short rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype d-flex justify-content-between"><span>Brutalities</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "brutalities")\'>[+]</span></span><p>At 3rd level, you have mastered two brutalities of your choice. You master additional brutalities at 6th (3 brutalities), 10th (4 brutalities), and 14th (5 brutalities) level. Select brutalities from the list below.</p><p>Once per turn, you may spend one Brutality Point to use one of your mastered brutalities.</p><p><b>Replacing a Brutality.</b> Whenever you gain a path feature, you can replace one of your mastered brutalities with another brutality.</p><p><b>Saving Throws.</b> Use your Strength modifier to determine the saving throw DC for your brutalities.</p><p class="text-center"><b>Brutality Save DC</b> = 8 + your proficiency bonus + your Strength modifier</p><span style="display: none" id="brutalities"><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Bloodlust</span><p>When you reduce a creature to 0 hit points with a melee weapon attack while raging, you can attempt to move and attack another creature.</p><p>You may spend a bonus action to move up to half your speed towards another creature. If the creature is (a) within your reach and (b) your original attack would hit it, that creature takes 1d6 damage. The damage is of the same type dealt by the original attack and cannot exceed the total damage dealt by the original attack.</p><p><b>Greater Bloodlust: </b>Starting at 5th level, the damage increases from 1d6 to 2d6.</p><p><b>Superior Bloodlust: </b>Starting at 9th level, the damage increases from 2d6 to 3d6.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Charge</span><p>When you move at least 20 feet straight towards a creature while raging and hit it with a melee weapon attack, you can deal 1d6 extra damage with your attack.</p><p>The damage is of the same type dealt by the original attack and cannot exceed the total damage dealt by the original attack.</p><p><b>Greater Charge: </b>Starting at 5th level, the damage increases from 1d6 to 2d6.</p><p><b>Superior Charge: </b>Starting at 9th level, the damage increases from 2d6 to 3d6.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Cleave</span><p>When you hit a creature with a melee weapon attack, you can attempt to damage another nearby creature. Choose a creature that is (a) within 5 feet of the original target and (b) within your reach. If the original attack roll would hit the second creature, that creature takes 1d6 damage.</p><p>The damage is of the same type dealt by the original attack and cannot exceed the total damage dealt by the original attack.</p><p><b>Greater Cleave: </b>Starting at 5th level, the damage increases from 1d6 to 2d6.</p><p><b>Superior Cleave: </b>Starting at 9th level, the damage increases from 2d6 to 3d6.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Ferocity</span><p>When you make an ability check and use Athletics or Intimidation, you can roll 1d6 and add it to the result. You can wait until after you roll your check before deciding to use this brutality, but you must decide before the GM says whether your check succeeds or fails.</p><p><b>Greater Ferocity: </b>Starting at 5th level, your bonus increases from 1d6 to 1d8.</p><p><b>Superior Ferocity: </b>Starting at 9th level, your bonus increases from 1d8 to 1d10.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Grab</span><p>When you hit an adjacent creature with an opportunity attack and you have at least one hand free, you can attempt to grab hold of the creature. If the target is Medium or smaller, it must make a Strength or Dexterity saving throw—the target may choose which. On a failed save, the target is grabbed and gains the Grappled condition.</p><p><b>Greater Grab: </b>Starting at 5th level, you can use this brutality against Large creatures.</p><p><b>Superior Grab: </b>Starting at 9th level, can use this brutality against Huge creatures.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Headbutt</span><p>When you hit an adjacent creature with a melee weapon attack, you can use a bonus action to attempt to knock the creature down. If the target is Medium or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.</p><p><b>Greater Headbutt: </b>Starting at 5th level, you can use this brutality against Large creatures.</p><p><b>Superior Headbutt: </b>Starting at 9th level, you can use this brutality against Huge creatures.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Kick</span><p>When you hit an adjacent creature with a melee weapon attack, you can try to kick it away from you. If the target is Medium or smaller, it must make a Strength saving throw. On a failed save, you knock the target back up to 10 feet.</p><p><b>Greater Kick: </b>Starting at 5th level, you can use this brutality against Large creatures.</p><p><b>Superior Kick: </b>Starting at 9th level, you can use this brutality against Huge creatures.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Relentless</span><p>When you are reduced to 0 hit points while raging but not killed outright, you can drop to 1 hit point instead. You can’t use this brutality again until you finish a long rest.</p><p><b>Greater Relentless: </b>Starting at 5th level, you can use this brutality two times per long rest.</p><p><b>Superior Relentless: </b>Starting at 9th level, you can use this brutality three times per long rest.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Roar</span><p>When you hit an adjacent creature with a melee weapon attack, you can attempt to frighten the target. The target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.</p><p><b>Greater Roar: </b>Starting at 5th level, you can target one additional creature that is within 5 feet of you.</p><p><b>Superior Roar: </b>Starting at 9th level, you can target one additional creature that is within 10 feet of you.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Smash</span><p>When you hit a creature with a melee weapon attack, you can momentarily weaken its defenses. Until the start of your next turn, the next attack roll made against the target by an attacker other than you has advantage.</p><p><b>Greater Smash: </b>Starting at 5th level, the target grants advantage to the next two attack rolls made against it before the start of your next turn.</p><p><b>Superior Smash: </b>Starting at 9th level, the target grants advantage to the next three attack rolls made against it before the start of your next turn.</p></span></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Animal Instincts</span><p>You have advantage on Animal Handling checks and Persuasion checks with creatures that have no language or share no language with you. You also have keen senses, giving you advantage on Wisdom (Perception) checks. Finally, you have advantage on Wisdom (Survival) checks when tracking a creature you have seen or interacted with before.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Robust Constitution</span><p>Your hit point maximum increases by your level when you gain this feature. Whenever you gain a level thereafter, your hit point maximum increases by an additional 1 hit point. You also have advantage on Constitution saving throws against poison and disease.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Massive Weapon Fighting</span><p>You are experienced at hunting colossal creatures with weapons of the same scale.</p><p>You can construct a massive weapon with 1 week of work requiring twice the normal weapon\'s price in gold, or you can commission one from a blacksmith for a comparable price. You have proficiency in a massive weapon if you have proficiency in its normal counterpart.</p><p>Massive weapons deal twice the number of damage dice as their normal counterparts. When you score a critical hit using a massive weapon against a creature, it must make a Constitution saving throw (DC = 8 + your Strength modifier + your proficiency bonus) or be stunned until the beginning of your next turn. While you are raging, you may attack with massive weapons normally. Otherwise, you may only attack with a massive weapon once each turn.</p></td></tr>']
        },{
            archetypeName: "Path of the Totem Warrior",
            archetypeFeatures: ["Spirit Seeker","Totem Spirit","Aspect of the Beast","Spirit Walker","Totemic Attunement"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Path of the Totem Warrior</span><p>The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding ancestral fuel to your barbarian rage.</p><p>Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Spirit Seeker</span><p>Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. You gain the ability to use telepathy with animals, bypassing the need for the animal to know a language. The animal must be in your line of sight within 60 feet of you.</p><p>You also can link your mind with an animal by spending ten minutes of focused telepathy with it. Once you are linked, you can use your action to see through the beast\'s eyes and hear what it hears and continue to do so until you use your action to return to your normal senses. While perceiving through the beast\'s senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Totem Spirit</span><p>When you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object—an amulet or similar adornment—that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thickskinned, or if your totem is the eagle, your eyes turn bright yellow.</p><p>Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.</p><p><b>Bear. </b>While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment</p><p><b>Eagle. </b>While you\'re raging and aren\'t wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.</p><p><b>Oryx. </b>While you\'re raging and aren\'t wearing heavy armor, your walking speed increases by 15 feet. The spirit of the oryx makes you extraordinarily swift.</p><p><b>Tiger. </b>While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.</p><p><b>Wolf. </b>While you\'re raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype"></span><p>You gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.</p><p><b>Bear. </b>You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.</p><p><b>Eagle. </b>You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn\'t impose disadvantage on your Wisdom (Perception) checks.</p><p><b>Oryx. </b>Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they\'re within 60 feet of you and you\'re not incapacitated. The oryx spirit helps you roam far and fast.</p><p><b>Tiger. </b>You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.</p><p><b>Wolf. </b>You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Spirit Walker</span><p>You can spend an hour sending your mind out to connect with spirits of nature around you. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.</p><p>These spirits give you knowledge of the surrounding territory. In the outdoors, you learn of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet.</p><p>You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:</p><ul><li>Terrain and bodies of water.</li><li>Dangerous amalgamates.</li><li>Prevalent plants, minerals, animals, or peoples.</li><li>Sundering storms.</li><li>Buildings or ruins.</li></ul><p>For example, you could determine the location of a powerful amalgamate in the area, the location of major sources of safe drinking water, and the location of any nearby towns.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Totemic Attunement</span><p>You gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.</p><p><b>Bear. </b>While you\'re raging, any creature within 5 feet of you that\'s hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can\'t see or hear you or if it can\'t be frightened.</p><p><b>Eagle. </b>While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.</p><p><b>Oryx. </b>While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.</p><p><b>Tiger. </b>While you\'re raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.</p><p><b>Wolf. </b>While you\'re raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.</p></td></tr>']
        }]
    };

    var fighter = {
        hd: "1d10" ,
        hp1stlvl: "10",
        hphigherlvl: "1d10 (or 6) + your Constitution modifier per Fighter",
        armorprof: "light armor, medium armor, heavy armor, shields.",
        weaponprof: "simple weapons, martial weapons.",
        skillandtools: "two",
        className: "Fighter",
        classAdditionalFeatures: '',
        features: ["Fighting Style, Second Wind","Action Surge","Martial Archetype","Ability Score Improvement","Extra Attack","Ability Score Improvement","Martial Archetype Feature","Ability Score Improvement","Indomitable","Martial Archetype Feature","Extra Attack (2)","Ability Score Improvement","Indomitable (two uses)","Ability Score Improvement","Martial Archetype Feature","Ability Score Improvement","Action Surge (two uses),Indomitable (three uses)","Martial Archetype Feature","Ability Score Improvement","Extra Attack (3)"],
        extraFeatures: '',
        featuresDesc:['<tr><td><span class="class-feature-title d-flex justify-content-between"><span>Fighting Style</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "fighting-style-fighter")\'>[+]</span></span><p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take the same Fighting Style option more than once, even if you get to choose again. New options outside of the Player’s Handbook are available.</p><span style="display: none" id="fighting-style-fighter"><span class="class-feature-subtitle">Archery</span><p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p><span class="class-feature-subtitle">Blind Fighting</span><p>Being unable to see a creature doesn\'t impose disadvantage on your attack rolls against it, provided the creature isn\'t hidden from you.</p><span class="class-feature-subtitle">Close Quarters Shooter</span><p>When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.</p><span class="class-feature-subtitle">Defense</span><p>While you are wearing armor, you gain a +1 bonus to AC.</p><span class="class-feature-subtitle">Dueling</span><p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p><span class="class-feature-subtitle">Great Weapon Fighting</span><p>When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</p><span class="class-feature-subtitle">Interception</span><p>When a creature you can see hits a target that is within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.</p><span class="class-feature-subtitle">Protection</span><p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p><span class="class-feature-subtitle">Superior Technique</span><p>You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver\'s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or    Dexterity modifier (your choice).</p><p>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.</p><span class="class-feature-subtitle">Thrown Weapon Fighting</span><p>You can draw a weapon that has the thrown property as part of the attack you make with the weapon.</p><p>In addition, when you hit with a ranged attack using a thrown weapon, you gain a +1 bonus to the damage roll.</p><span class="class-feature-subtitle">Two-Weapon Fighting</span><p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p></span></td></tr>','<tr><td><span class="class-feature-title">Second Wind</span><p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again.</p></td></tr>','<tr><td><span class="class-feature-title">Action Surge</span><p>Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.</p><p>Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Archetype</span><p>At 3rd level, you choose an archetype from the list available that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack</span><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p><p>The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 6th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Archetype Feature</span><p>At 7th level, you gain a feature granted by your Martial Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Indomitable</span><p>Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can\'t use this feature again until you finish a long rest.</p><p>You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Archetype Feature</span><p>At 10th level, you gain a feature granted by your Martial Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack (2)</span><p>At 11th level, you can attack three times whenever you take the Attack action on your turn.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Indomitable (two uses)</span><p>At 13th level, you can use Indomitable twice between long rests.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 14th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Archetype Feature</span><p>At 15th level, you gain a feature granted by your Martial Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Action Surge (two uses)</span><p>At 17th level, you can use Action Surge twice before a rest, but only once on the same turn.</p></td></tr>','<tr><td><span class="class-feature-title">Indomitable (three uses)</span><p>At 17th level, you can use Indomitable three times between long rests.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Archetype Feature</span><p>At 18th level, you gain a feature granted by your Martial Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack (3)</span><p>At 20th level, you can attack four times whenever you take the Attack action on your turn.</p></td></tr>'],
        archetypes:[{
            archetypeName: "Battle Master",
            archetypeFeatures: ["Student of War","Combat Superiority","Maneuvers","Additional Maneuvers","Additional Superiority Die","Know Your Enemy","Additional Maneuvers","Improved Combat Superiority (d10)","Additional Maneuvers","Additional Superiority Die","Relentless","Improved Combat Superiority (d12)"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Battle Master</span><p>Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Student of War</span><p>At 3rd level, you gain proficiency with one type of artisan\'s tools of your choice.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Combat Superiority</span><p>When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.</p><p><b>Maneuvers. </b>You learn three maneuvers of your choice, which are listed under "Maneuvers" below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.</p><p>You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.</p><p><b>Superiority Dice. </b>You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.</p><p>You gain another superiority die at 7th level and one more at 15th level.</p><p><b>Saving Throws. </b>Some of your maneuvers require your target to make a saving throw to resist the maneuver\'s effects. The saving throw DC is calculated as follows:</p><p class="text-center"><b>Maneuver save DC</b> = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype d-flex justify-content-between"><span>Maneuvers</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "maneuvers")\'>[+]</span></span><span style="display: none" id="maneuvers"><p>The maneuvers are presented in alphabetical order.</p><p><b>Ambush. </b>When you make a Dexterity (Stealth) check or an initiative roll, you can expend one superiority die and add the die to the roll.</p><p><b>Bait and Switch. </b>When you\'re within 5 feet of an ally on your turn, you can expend one superiority die and switch places with that ally, provided you spend at least 5 feet of movement. This movement doesn\'t provoke opportunity attacks</p><p>Roll the superiority die. Until the start of your next turn, the ally gains a bonus to AC equal to the number rolled</p><p><b>Commander\'s Strike. </b>When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack\'s damage roll.</p><p><b>Disarming Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it\'s holding. You add the superiority die to the attack\'s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet</p><p><b>Distracting Strike. </b>When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack\'s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.</p><p><b>Evasive Footwork. </b>When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.</p><p><b>Feinting Attack. </b>You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll this turn against that creature. If that attack hits, add the superiority die to the attack\'s damage roll.</p><p>The advantage is lost if not used on the turn you gain it.</p><p><b>Goading Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack\'s damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.</p><p><b>Lunging Attack. </b>When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack\'s damage roll.</p><p><b>Maneuvering Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack\'s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.</p><p><b>Menacing Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack\'s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.</p><p><b>Parry. </b>When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.</p><p><b>Precision Attack. </b>When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.</p><p><b>Pushing Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.</p><p><b>Rally. </b>On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.</p><p><b>Restraining Strike. </b>Immediately after you hit a creature with a melee weapon attack on your turn, you can expend onesuperiority die and use a bonus action to grapple the target (see chapter 9 in the Player\'s Handbook for rules on grappling). Add the superiority die to your Strength (Athletics) check. The target is also restrained while grappled in this way.</p><p><b>Riposte. </b>When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack\'s damage roll.</p><p><b>Sweeping Attack. </b>When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.</p><p><b>Trip Attack. </b>When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.</p></span></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Maneuvers</span><p>At 7th level, you learn two additional maneuvers of your choice.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Superiority Die</span><p>You gain another superiority die at 7th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Know Your Enemy</span><p>If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:</p><ul><li>Strength score</li><li>Dexterity score</li><li>Constitution score</li><li>Armor Class</li><li>Current hit points</li><li>Total class levels (if any)</li><li>Fighter class levels (if any)</li></ul></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Maneuvers</span><p>At 10th level, you learn two additional maneuvers of your choice.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Improved Combat Superiority (d10)</span><p>At 10th level, your superiority dice turn into d10s.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Maneuvers</span><p>At 15th level, you learn two additional maneuvers of your choice.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Superiority Die</span><p>You gain another superiority die at 15th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Relentless</span><p>Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Improved Combat Superiority (d12)</span><p>At 18th level, your superiority dice turn into d12s.</p></td></tr>']
        },{
            archetypeName: "Brute",
            archetypeFeatures: ["Brute Force","Brutish Durability","Additional Fighting Style","Devastating Critical","Survivor"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Brute</span><p>Brutes are simple warriors who rely on mighty attacks and their own durability to overcome their enemies. Some brutes combine this physical might with tactical cunning. Others just hit things until those things stop hitting back.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Brute Force</span><p>Starting at 3rd level, you\'re able to strike with your weapons with especially brutal force. Whenever you hit with a weapon that you\'re proficient with and deal damage, the weapon\'s damage increases by an amount based on your level in this class, as shown on the following table.</p><table class="table table-striped table-bordered"><th class="text-center">Fighter Level</th><th class="text-center">Damage Increase</th></tr><tr><td class="text-center">3rd</td><td class="text-center">1d4</td></tr><tr><td class="text-center">10th</td><td class="text-center">1d6</td></tr><tr><td class="text-center">16th</td><td class="text-center">1d8</td></tr><tr><td class="text-center">20th</td><td class="text-center">1d10</td></tr></table></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Brutish Durability</span><p>Beginning at 7th level, your toughness allows you to shrug off assaults that would devastate others.</p><p>Whenever you make a saving throw, roll 1d6 and add the die to your saving throw total. If applying this bonus to a death saving throw increases the total to 20 or higher, you gain the benefits of rolling a 20 on the d20.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Fighting Style</span><p>At 10th level, you can choose a second option from the Fighting Style feature.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Devastating Critical</span><p>Starting at 15th level, when you score a critical hit with a weapon attack, you gain a bonus to that weapon\'s damage roll equal to your level in this class.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Survivor</span><p>At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns in combat, you regain hit points equal to 5 + your Constitution modifier (minimum of 1 hit point). You don\'t gain this benefit if you have 0 hit points or if you have more than half of your hit points left.</p></td></tr>']
        },{
            archetypeName: "Cavalier",
            archetypeFeatures: ["Bonus Proficiency","Born to the Saddle","Unwavering Mark","Warding Maneuver","Hold the Line","Ferocious Charger","Vigilant Defender"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Cavalier</span><p>The archetypal Cavalier excels at mounted combat. Usually born among the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Bonus Proficiency</span><p>When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Born to the Saddle</span><p>Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you\'re not incapacitated.</p><p>Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Unwavering Mark</span><p>Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.</p><p>While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn\'t target you.</p><p>In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack\'s weapon deals extra damage to the target equal to half your fighter level.</p><p>Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Warding Maneuver</span><p>At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you\'re wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target\'s AC against that attack. If the attack still hits, the target has resistance against the attack\'s damage.</p><p>You can use this feature a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Ferocious Charger</span><p>Starting at 15th level, you can run down your foes, whether you\'re mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Vigilant Defender</span><p>Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature\'s turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can\'t use it on the same turn that you take your normal reaction.</p></td></tr>']
        },{
            archetypeName: "Champion",
            archetypeFeatures: ["Improved Critical","Remarkable Athlete","Additional Fighting Style","Superior Critical","Survivor"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Champion</span><p>The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Improved Critical</span><p>Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Remarkable Athlete</span><p>Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn\'t already use your proficiency bonus.</p><p>In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Additional Fighting Style</span><p>At 10th level, you can choose a second option from the Fighting Style class feature.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Superior Critical</span><p>Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Survivor</span><p>At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don\'t gain this benefit if you have 0 hit points.</p></td></tr>']
        },{
            archetypeName: "Psi Knight",
            archetypeFeatures: ["Psychokinesis Adept","Psionic Power", "Telekinetic Adept", "Psi-Enhanced Metabolism","Bulwark of Force","Telekinetic Master"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Psi Knight</span><p>Awake to the psionic power within, a Psi Knight is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force.</p><p>As a Psi Knight, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind’s power as both weapon and shield.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psychokinesis Adept</span><p>You gain the Far Hand talent and can move twice as much weight with it. You can also leave objects suspended in mid-air from one round to another without them falling to the ground.</p><p>In addition, you can also use skills or tools in which you have proficiency with Far Hand instead of your hands, exchanging Dexterity for Intelligence and making the skill checks at disadvantage. You still need the proper tools.</p><p>The disadvantage is lost at 6th level, and you gain Advantage with them at 14th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psionic Power</span><p>You harbor a wellspring of psionic power within yourself. This energy ebbs and flows as you channel it in various ways and is represented by your Psionic Power die, the starting size of which is a d6.</p><p><b>Psionic Power Options. </b>You can use your Psionic Power die in the following ways:</p><p><b>Protective Field. </b>When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to roll your Psionic Power die and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1),  as you create a momentary shield of telekinetic force.</p><p><b>Psi-Powered Leap. </b>When you make a high or long jump, you can roll your Psionic Power die and extend the distance of the jump, up to a number of feet equal to twice the number rolled plus twice your Intelligence modifier (minimum of 1 extra foot). This extra distance costs you only 1 foot of movement.</p><p><b>Telekinetic Strike. </b>You can propel your attacks with  telekinetic force. Once on each of your turns, immediately after you deal damage to a target within 30 feet of you with a weapon attack, you can roll your Psionic Power die and also deal force damage to the target equal to the number rolled.</p><p><b>Changing the Die’s Size. </b>If you roll the highest number on your Psionic Power die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a d6 and you roll a 6, it becomes a d4. If it’s a d4 and you roll a 4, it becomes unusable until you finish a long rest. Conversely, if you roll a 1 on your Psionic Power die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a d4, the die then becomes a d6.</p><p>Whenever you finish a long rest, your Psionic Power die resets to its starting size. When you reach certain levels in this class, the starting size of your Psionic Power die increases: at 5th level (d8), 11th level (d10), and 17th level (d12).</p><p><b>Psi Replenishment. </b>As a bonus action, you can calm your mind for a moment and restore your Psionic Power die to its starting size. You then can’t use Psi Replenishment again until you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Telekinetic Adept</span><p>You have mastered new ways to use your telekinesis.</p><p><b>Psionic Thrust. </b>When you deal damage to a target that is up to one size larger than yourself with the Telekinetic Strike of your Psionic Power, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. Unless the save succeeds, you can knock the target prone or move it up to 10 feet in any direction horizontally.</p><p><b>Telekinetic Movement. </b>If your Psionic Power die is available, you can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. When you take this action, your Psionic Power die decreases by one die size.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psi-Enhanced Metabolism</span><p>The psionic energy flowing through you has bolstered your mind and body. You have resistance to poison and psychic damage, and you are immune to the poisoned condition.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Bulwark of Force</span><p>You can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you’re incapacitated.</p><p>Once you use this feature, you can’t do so again until you finish a long rest, unless you decrease your Psionic Power die by one die size to use this feature again.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Telekinetic Master</span><p>Your ability to move creatures and objects with your mind is matched by few. If your Psionic Power die is available, you can move or manipulate creatures or objects within 60 feet of you by thought. For up to ten minutes, you can use your action to exert your will causing the appropriate effect below. You can affect the same target round after round or choose a new one at any time. If you switch targets, the prior target is no longer affected.</p><p><b></b>Objects. As an action, you can try to move an object that weighs up to 1,000 pounds. If the object isn\'t being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond 60 feet of you and you must keep the object within sight during this movement.</p><p>If the object is worn or carried by a creature, you must make an Intelligence check contested by that creature\'s Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond 60 feet of you.</p><p>You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.</p><p><b></b>Creature. You can try to move a Huge or smaller creature. Make an Intelligence check contested by the creature\'s Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not 60 feet of you. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.</p><p>On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.</p><p>When you use this ability, your Psionic Power die decreases by one die size.</p></td></tr>']
        },{
            archetypeName: "Sharpshooter",
            archetypeFeatures: ["Steady Aim","Careful Eyes","Close-Quarters Shooting","Called Shot","Snap Shot"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Sharpshooter</span><p>The Sharpshooter is a master of ranged combat. An excellent sniper and eagle-eyed scout, this fighter is a perilous foe who can defeat an entire war band so long as they are kept at range.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Steady Aim</span><p>Your aim becomes deadly. As a bonus action on your turn, you can take careful aim at a creature you can see that is within range of a ranged weapon you\'re wielding. Until the end of this turn, your ranged attacks with that weapon gain two benefits against the target:</p><ul><li>The attacks ignore half and three-quarters cover.</li><li>On each hit, the weapon deals additional damage to the target equal to 2 + half your fighter level.</li></ul><p>You can use this feature three times. You regain all expended uses of it when you finish a short or long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Careful Eyes</span><p>Your sharp eyes help you detect important information. You gain proficiency in the Perception, Investigation, or Survival skill (choose one). If you already have proficiency in your choice of skill, your proficiency bonus is doubled for any ability check you make that uses the chosen proficiencies.</p><p>In addition, your years of training in  different environments and lighting conditions has honed your vision. You now have darkvision within 60 feet, and if you already have darkvision, it is extended by 30 feet.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Close-Quarters Shooting</span><p>You learn to handle yourself in close combat. Making a ranged attack roll while within 5 feet of an enemy doesn’t impose disadvantage on your roll.</p><p>In addition, if you hit a creature within 5 feet of you with a ranged attack on your turn, that creature can’t take reactions until the end of this turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Called Shot</span><p>You learn to make the most of your shots. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to add 3d6 weapon damage on a successful hit.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Snap Shot</span><p>You are ever ready to spring into action. If you take the Attack action on your first turn of a combat, you can make one additional ranged weapon attack as part of that action.</p></td></tr> ']
        },{
            archetypeName: "Warcaller",
            archetypeFeatures: ["Martial Chant","Warsong","Combat Chanting","Wall of Words","Celeritous Vocals","Master Orator"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Warcaller</span><p>As skilled with the musical note or the spoken word as they are with the blade, warcallers blend their skill at arms psionically with the power of song. Primarily serving as martial troops or bodyguards for tribe leaders, clan heads, or Keepers of knowledge, warcallers can be found nearly anywhere that an important individual would be. Though as skilled with instruments as other musicians, most warcallers find singing or chanting to be the most efficient and practical method of using their abilities, as this leaves their hands free to hold their weapons or shields.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Martial Chant</span><p>You gain proficiency in three musical instruments and the Performance skill. Additionally, you learn the Ego Assault talent. Your DC is 8 + your proficiency modifier + your Charisma modifier. Lastly, you can add double your proficiency bonus to all Performance checks that involve singing, chanting, or speaking.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Warsong</span><p>You learn to fill your allies with vigor and might with your battle songs. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Warsong die, a d6.</p><p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Warsong die but must decide before the DM says whether the roll succeeds or fails. Once the Warsong die is rolled, it is lost. A creature can have only one Warsong die at a time.</p><p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p><p>Your Warsong die changes when you reach certain levels in this class. The die becomes a d8 at 10th level, a d10 at 15th level, and a d12 at 18th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Combat Chanting</span><p>You learn to bolster yourself with the same vigor as your allies. Whenever you grant another creature a Warsong die, you gain one yourself. You also now regain all your expended uses of Warsong when you finish a short or long rest.</p><p>As well, whenever you use the Ego Assault talent on your turn, you can use your bonus action to make a single weapon attack.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Wall of Words</span><p>Whenever a creature that has a Warsong die you gave to them is hit by an attack, it can use its reaction to add that die roll to its AC, potentially causing the attack to miss.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Celeritous Vocals</span><p>Any creature that has an unspent Warsong die that you granted it gains a +1 bonus to its AC and increases its speed by 10 feet.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Master Orator</span><p>When using your Warsong ability, you can target a number of additional creatures within range equal to your Charisma modifier, giving each of them a Warsong die.</p></td></tr>']
        }]
    };

    var monk = {
        hd: "1d8" ,
        hp1stlvl: "8",
        hphigherlvl: "1d8 (or 5) + your Constitution modifier per Monk",
        armorprof: "none.",
        weaponprof: "simple weapons, shortswords.",
        skillandtools: "two",
        className: "Monk",
        classAdditionalFeatures: ["Martial Arts", "Ki Points", "Unarmored<br>Movement"],
        features: ["Unarmored Defense, Martial Arts","Ki, Unarmored Movement","Deflect Missiles, Monastic Tradition","Ability Score Improvement, Slow Fall","Extra Attack, Stunning Strike","Ki-Empowered Strikes, Monastic Tradition Feature","Evasion, Stillness of Mind","Ability Score Improvement","Unarmored Movement improvement","Purity of Body","Monastic Tradition Feature","Ability Score Improvement","Tongue of the Sun and Moon","Diamond Soul","Timeless Body","Ability Score Improvement","Monastic Tradition Feature","Empty Body","Ability Score Improvement","Perfect Self"],
        extraFeatures: [["1d4", "—", "—"],["1d4", "2", "+10ft"],["1d4", "3", "+10ft"],["1d4", "4", "+10ft"],["1d6", "5", "+15ft"],["1d6", "6", "+15ft"],["1d6", "7", "+15ft"],["1d6", "8", "+15ft"],["1d6", "9", "+15ft"],["1d6", "10", "+20ft"],["1d8", "11", "+20ft"],["1d8", "12", "+20ft"],["1d8", "13", "+20ft"],["1d8", "14", "+25ft"],["1d8", "15", "+25ft"],["1d8", "16", "+25ft"],["1d10", "17", "+25ft"],["1d10", "18", "+30ft"],["1d10", "19", "+30ft"],["1d10", "20", "+30ft"]],
        featuresDesc:['<tr><td><span class="class-feature-title">Unarmored Defense</span><p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p></td></tr>','<tr><td><span class="class-feature-title">Martial Arts</span><p>Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don\'t have the two-handed or heavy property.</p><p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren\'t wearing armor or wielding a shield.</p><ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven\'t already taken a bonus action this turn.</li></ul><p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama).</p></td></tr>','<tr><td><span class="class-feature-title">Ki</span><p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.</p><p>You can spend these points to fuel various ki features. You start knowing the following features: Flurry of Blows, Distant Eye, Ki-Fueled Strike, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.</p><p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.</p><p>Some of your ki features require your target to make a saving throw to resist the feature\'s effects. The saving throw DC is calculated as follows:</p><p class="text-center"><b>Ki save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p><span class="class-feature-subtitle">Distant Eye</span><p>When you make a ranged weapon attack, you can spend 1 ki point to prevent attacking at long range from imposing disadvantage on your attack rolls until the end of the current turn.</p><span class="class-feature-subtitle">Flurry of Blows</span><p>Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.</p><span class="class-feature-subtitle">Ki-Fueled Strike</span><p>If you spend 1 ki or more as part of your action on your turn, you can then immediately make one unarmed strike as a bonus action.</p><span class="class-feature-subtitle">Patient Defense</span><p>You can spend 1 ki point to take the Dodge action as a bonus action on your turn.</p><span class="class-feature-subtitle">Step of the Wind</span><p>You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.</p></td></tr>','<tr><td><span class="class-feature-title">Unarmored Movement</span><p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.</p><p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.</p></td></tr>','<tr><td><span class="class-feature-title">Deflect Missiles</span><p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.</p><p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.</p></td></tr>','<tr><td><span class="class-feature-title">Monastic Tradition</span><p>When you reach 3rd level, you commit yourself to a monastic tradition, chosen from the list of available traditions. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Slow Fall</span><p>Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack</span><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p></td></tr>','<tr><td><span class="class-feature-title">Stunning Strike</span><p>Starting at 5th level, you can interfere with the flow of ki in an opponent\'s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.</p></td></tr>','<tr><td><span class="class-feature-title">Ki-Empowered Strikes</span><p>Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p></td></tr>','<tr><td><span class="class-feature-title">Monastic Tradition Feature</span><p>At 6th level, you gain one feature granted by your Monastic Tradition.</p></td></tr>','<tr><td><span class="class-feature-title">Evasion</span><p>At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon\'s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.</p></td></tr>','<tr><td><span class="class-feature-title">Stillness of Mind</span><p>Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Unarmored Movement improvement</span><p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.</p></td></tr>','<tr><td><span class="class-feature-title">Purity of Body</span><p>At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.</p></td></tr>','<tr><td><span class="class-feature-title">Monastic Tradition Feature</span><p>At 11th level, you gain one feature granted by your Monastic Tradition.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Tongue of the Sun and Moon</span><p>Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.</p></td></tr>','<tr><td><span class="class-feature-title">Diamond Soul</span><p>Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.</p><p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.</p></td></tr>','<tr><td><span class="class-feature-title">Timeless Body</span><p>At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can\'t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Monastic Tradition Feature</span><p>At 17th level, you gain one feature granted by your Monastic Tradition.</p></td></tr>','<tr><td><span class="class-feature-title">Empty Body</span><p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.</p><p>Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can\'t take any other creatures with you.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Perfect Self</span><p>At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.</p></td></tr>'],
        archetypes:[{
            archetypeName: "Way of the Drunken Master",
            archetypeFeatures: ["Bonus Proficiencies","Drunken Technique","Tipsy Sway","Drunkard's Luck","Intoxicated Frenzy"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Way of the Drunken Master</span><p>The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master\'s erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.</p><p>A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Bonus Proficiencies</span><p>When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don\'t already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer\'s supplies if you don\'t already have it.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Drunken Technique</span><p>At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Tipsy Sway</span><p>Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.</p><p><b>Leap to Your Feet.</b> When you\'re prone, you can stand up by spending 5 feet of movement, rather than half your speed.</p><p><b>Redirect Attack.</b> When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Drunkard\'s Luck</span><p>Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Intoxicated Frenzy</span><p>At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.</p></td></tr>']
        },{
            archetypeName: "Way of the Kensei",
            archetypeFeatures: ["Path of the Kensei","One with the Blade","Sharpen the Blade","Unerring Accuracy"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Way of the Kensei</span><p>Monks of the Way of the Kensei train relentlessly with their weapons, to the point where the weapon becomes an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.</p><p>A kensei sees a weapon in much the same way a calligrapher or painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Path of the Kensei</span><p>When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits.</p><p><b>Kensei Weapons.</b> Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don\'t already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition\'s features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon—either melee or ranged—to be a kensei weapon for you, following the criteria above.</p><p><b>Agile Parry.</b> If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren\'t incapacitated.</p><p><b>Kensei\'s Shot.</b> You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon\'s type. You retain this benefit until the end of the current turn.</p><p><b>Way of the Brush.</b> You gain proficiency with Artist\'s Supplies.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">One with the Blade</span><p>At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.</p><p><b>Magic Kensei Weapons.</b> Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p><p><b>Deft Strike.</b> When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Sharpen the Blade</span><p>At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Unerring Accuracy</span><p>At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.</p></td></tr>']
        },{
            archetypeName: "Way of the Long Death",
            archetypeFeatures: ["Touch of Death","Hour of Reaping","Mastery of Death","Touch of the Long Death"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Way of the Long Death</span><p>Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Touch of Death</span><p>Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Hour of Reaping</span><p>At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Mastery of Death</span><p>Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Touch of the Long Death</span><p>Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.</p></td></tr>']
        },{
            archetypeName: "Way of the Open Hand",
            archetypeFeatures: ["Open Hand Technique","Wholeness of Body","Protective Hand","Quivering Palm"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Way of the Open Hand</span><p>Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Open Hand Technique</span><p>You can manipulate your enemy\'s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.</p><ul><li>It must succeed on a Dexterity saving throw or be knocked prone.</li><li>It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.</li><li>It can\'t take reactions until the end of your next turn.</li></ul></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Wholeness of Body</span><p>You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Protective Hand</span><p>You can tap into your ki reservoir to create a protective barrier. So long as you have at least 1 ki, you may use a reaction against an incoming attack (even if you are surprised). You extend your ki reserves to create an invisible globe with a radius of 15 feet centered on you.</p><p>Nothing can pass the barrier until your next turn including physical attacks, creatures or energy of any type. Any projectile stops in the middle of the air and falls to the ground, and any creatures captured crossing the barrier are pushed back, and Large or smaller creatures are also knocked prone.</p><p>Once you use this feature, you cannot do so again until you complete a short or long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Quivering Palm</span><p>You gain the ability to set up lethal vibrations in someone\'s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.</p><p>You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.</p></td></tr>']
        },{
            archetypeName: "Way of the Soul Knife",
            archetypeFeatures: ["Soul Knife","Psychic Slash","Aura Vision","Spectral Blades", "Psychic Form"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Way of the Soul Knife</span><p>Monks of the Way of the Soul Knife are deadly assassins and bounty hunters. They use their psionic powers to manifest psionic blades that tear through their enemies\' bodies and psychic auras. Their talents extend beyond combat, as their ability to perceive auras allows them to track down foes and see through their deceptions.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Soul Knife</span><p>You can use your psionic energy to manifest blades that disrupt your foes\' minds. Your unarmed strikes deal your choice of psychic, piercing, slashing, or bludgeoning damage each time you hit. In addition, you can use a bonus action to increase the reach of your unarmed strikes by 30 feet until the end of your turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psychic Slash</span><p>When you channel ki into your attacks you augment your soul knives to inflict devastating psionic attacks. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows and that attack inflicts psychic damage, you can impose one of the following effects on the target:</p><p><b>Astral Slide.</b> You teleport a target up to one size category larger than yourself up to 10 feet to a destination you can see.</p><p><b>Life Drain.</b> You gain temporary hit points equal to half the damage your attack deals.</p><p><b>Invoke Terror.</b> The target must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn.</p><p><b>Invoke Wrath.</b> The target suffers disadvantage on all attack rolls against targets other than you until the end of your next turn.</p><p><b>Synaptic Overload.</b> The target gains vulnerability to psychic damage until the end of your next turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Aura Vision</span><p>You gain the ability to perceive the auras of other creatures. As an action, select a creature that you can see. That creature makes a Wisdom saving throw, and it has no knowledge that you forced it to attempt this saving throw. On a failed save, you learn if the creature shares any aspects of its alignment with you, its current hit points, and  its current attitude and intentions toward you or one other creature, object, or location of your choice.</p><p>In addition, for the next 24 hours or until you use this ability again, you can use an action to determine the creature\'s distance and direction from you.</p><p>If a creature succeeds on its saving throw against this ability, you cannot use this ability against that creature again until you complete a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Spectral Blades</span><p>You can cause your blades to phase through physical objects and defenses. Once during your turn, you can choose to forgo one unarmed strike in place of forcing a creature within the reach of that attack to make a Dexterity saving throw. On a failed saving throw, it takes your unarmed strike\'s damage, or half that damage if it succeeds.</p><p>Any extra effects or damage you prepare before you trigger the attack will apply. When a target fails its save against your Spectral Blades attack, you may also trigger effects after the attack if applicable. On a success, you may not trigger effects.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psychic Form</span><p>You can transform your physical body into the same psychic energy that comprises your soul knives. As a bonus action, you gain resistance to all types of damage, a fly speed of 30 feet, and the ability to pass through solid objects but not end your movement within them. This benefit lasts for 1 minute. Once you use this feature, you cannot do so again until you complete a long rest.</p></td></tr>']
        }]
    };

    var ranger = {
        hd: "1d8" ,
        hp1stlvl: "8",
        hphigherlvl: "1d8 (or 5) + your Constitution modifier per Ranger",
        armorprof: "light armor, medium armor, shields.",
        weaponprof: "simple weapons, martial weapons.",
        skillandtools: "three",
        className: "Ranger",
        classAdditionalFeatures: ["Survival Instincts", "Scrap Points"],
        features: ["Hunter’s Focus, Scrap, Survival Instincts, Traps","Fighting Style","Ranger Archetype","Ability Score Improvement","Extra Attack","Ranger’s Prey","Ranger Archetype Feature","Ability Score Improvement","Defensive Tactics","Hide in Plain Sight","Ranger Archetype Feature","Ability Score Improvement","Ranger’s Strike","Vanish","Ranger Archetype Feature","Ability Score Improvement","Relentless","Feral Senses","Ability Score Improvement","Foe Slayer"],
        extraFeatures: [["1","2"],["2","3"],["2","4"],["3","5"],["3","6"],["4","7"],["4","8"],["5","9"],["5","10"],["6","11"],["6","12"],["6","13"],["7","14"],["7","15"],["8","16"],["8","17"],["9","18"],["9","19"],["9","20"],["10","21"]],
        featuresDesc:['<tr><td><span class="class-feature-title">Hunter’s Focus</span><p>You can spend a bonus action to enter a hunter\'s focus that lasts for up to 10 minutes. Your focus ends early if you are reduced to 0 hit points or otherwise rendered incapacitated.</p><p>You can use this feature a number of times equal to your Wisdom modifier, and you regain expended uses when you finish a long rest. While you are focused, you gain the following benefits:</p><ul><li><b>Quarry.</b> As a free action, you can mark one creature that you can see as your quarry. Once per turn, when you hit your quarry with a weapon attack, you may deal an extra 1d4 damage. The damage die increases at 5th (1d6), 9th (1d8), 13th (1d10), and 17th (1d12) level.<br> If your quarry is reduced to 0 hit points, you can spend a bonus action to mark a different creature as your quarry.</li><li><b>Tracker.</b> You have advantage on any Wisdom (Perception) and Wisdom (Survival) checks you make to track, spot, or locate any creatures.</li><li><b>Alert.</b> You cannot be surprised.</li></td></tr>','<tr><td><span class="class-feature-title">Scrap</span><p>You have an amount of salvaged scrap, as shown in the Scrap Points column of the Ranger table. You can spend scrap to create traps—and you may learn other ways to use scrap from your Survival Instincts and your Ranger Archetype.</p><p>You recover all expended scrap points when you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-title d-flex justify-content-between"><span>Survival Instincts</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "survival-instincts")\'>[+]</span></span><p>At first level, you gain one survival instinct of your choice. When you gain certain ranger levels, you gain additional survival instincts of your choice—as shown in the Survival Instincts column of Ranger table.</p><p><b>Replacing Instincts.</b> When you gain a level in this class, you can choose one of the instincts you have and replace it with another instinct that you could learn at that level.</p><span style="display: none" id="survival-instincts"><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">A Light in the Dark</span><p>You know how to craft well-made candles and torches using natural materials. When you attempt to craft basic lighting equipment, you roll with advantage. In addition, your crafted lights not made with scrap burn for twice as long as normal.</p><p><b>Scrap Lights. </b>You can spend 1 action and 1 scrap to make an improvised torch that lasts for up to 1 hour. It provides bright light in a 20-foot radius and dim light for an additional 20 feet.</p><p><b>Scrap Lantern. </b>You can spend 10 minutes and 2 scrap to make an improvised hooded lantern. It casts bright light in a 30-foot radius and dim light for another 30 feet. Once lit, it burns for 3 hours. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.</p><p><b>Improved Lights. </b>Starting at 9th level, torches and lanterns you craft with scrap last twice as long and cast light twice as far.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Always Prepared</span><p>You like to have at least one trap prepared. When you finish a long rest, you may prepare one trap worth up to 2 scrap without needing to spend your own scrap.</p><p><b>Greater Preparation. </b>Starting at 5th-level, your trap can be worth up to 3 scrap.</p><p><b>Superior Preparation. </b>Starting at 9th-level, your trap can be worth up to 4 scrap.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Canny Rover</span><p>Your base walking speed increases by 5 feet. In addition, you gain a climbing and swimming speed equal to your base walking speed.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Comforting Presence</span><p>You can set up a comfortable resting place and ease simple pains. Whenever you and your allies take a short rest, you can use 1 scrap to fulfill the healer’s kit requirement to roll Hit Dice and heal.</p><p><b>Greater Comfort. </b>Starting at 5th level, you and your allies may add your Wisdom modifier towards healing when they roll at least one Hit Die during a short rest.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Expert Tracker</span><p>You know how to study tracks left behind by a creature. When you study a set of tracks, you roll with advantage and—if successful—gain an answer to one of the following questions of your choice:</p><ul><li>How many creatures made these tracks?</li><li>What type of creature made these tracks?</li><li>How old are these tracks?</li><li>Where are these tracks heading?</li></ul><p>If you critically succeed on your tracking, you gain answers to two questions of your choice instead of one.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Favored Enemy</span><p>Choose one favored enemy. When you mark a favored enemy as your quarry, you add your Wisdom modifier to your quarry damage.</p><p><b>Favorite Enemies. </b>Select from the following options: Aberrations, Beasts, Constructs, Giants, Humanoid (Touched-Kin or similar amalgamates), Monstrosities, Oozes, Plants, or Undead.</p><p><b>Greater Favored Enemy. </b>Starting at 5th level, you may reroll any 1’s on weapon damage dice once per turn against a marked favored enemy.</p><p><b>Superior Favored Enemy. </b>Starting at 9th level, once per turn you may expend 1 Hit Die to add to a failed attack roll against a marked favored enemy, potentially changing it into a successful attack.</p><p><b>Many Enemies. </b>You may take this instinct multiple times, selecting new enemies each time.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Focused Hunter</span><p>You can use your Hunter\'s Focus feature one additional time, regaining expended uses when you finish a long rest.</p><p><b>Extreme Focus. </b>You may take this instinct multiple times, gaining an additional +1 use each time.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Forager</span><p>When you forage, you find twice as much food or water as you normally would.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Focused Hunter</span><p>While you are asleep, you remain half-aware of what is happening around you. You can sense movement and may make Wisdom (Perception) checks while you sleep—though you have disadvantage</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Light Sleeper</span><p>While you are asleep, you remain half-aware of what is happening around you. You can sense movement and may make Wisdom (Perception) checks while you sleep—though you have disadvantage.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Nature’s Friend</span><p>You gain the trust of a tiny animal friend. You both share a basic, wordless understanding of each other—though the animal is still subject to its natural instincts. Your animal must be a tiny CR 0 beast, and—when relevant—it shares your pool of actions.</p><p>If your animal friend is reduced to 0 hit points, you can spend one Hit Hie or suffer a level of exhaustion to reduce it to 1 hit point instead. If your animal friend leaves or dies, you can spend time during a long rest to bond with another creature from the surrounding environment.</p><p><b>Many Friends: </b>You may take this instinct multiple times, gaining an additional animal friend each time.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Natural Explorer</span><p>When travelling outside, you may navigate as if you had a map and compass. In addition, difficult terrain doesn’t slow you or your group’s travel during long journeys.<p><b>Scrap Compass: </b>You can spend 1 action and 1 scrap to make an improvised compass that lasts for up to 1 hour.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Natural Healer</span><p>You create special herbal poultices that heal physical wounds. The poultices you create cannot be applied by anyone but you. After 24 hours, any poultices that you have not used lose their potency.</p><p>It takes scrap and 1 hour to create poultices. For each scrap you use, your poultice heals 1d6 hit points. You can spend up to your Wisdom modifier in scrap per poultice.</p><p>It takes 1 minute to apply a poultice to a wounded creature, thereby expending its use. A creature can only benefit from one poultice per short rest.</p><p><b>Quick Healer. </b>Starting at 3rd level, you can spend an action to apply a poultice to a creature and cure it from one of the following conditions: blinded, deafened, paralyzed, poisoned. Using a poultice this way does not count towards the one poultice per short rest limit.</p><p><b>Greater Healer. </b>Starting at 5th level, your poultice heals additional hit points equal to your Wisdom modifier.</p><p><b>Superior Healer. </b>Starting at 9th level, your poultice can also cure one poison effect in addition to healing hit points.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Ranger’s Expertise</span><p>Choose one skill: Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival.</p><p>You gain proficiency in this skill if you don’t already have it, and you add double your proficiency bonus to ability checks using it.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Scavenger</span><p>Once per long rest, you may scavenge a location for suitable scrap material. You regain 1d4 expended scrap from your location.</p><p><b>Greater Scavenger. </b>Starting at 5th level, the amount of scrap you recover increases from 1d4 to 1d6.</p><p><b>Superior Scavenger. </b>Starting at 9th level, the amount of scrap you recover increases from 1d6 to 1d8.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Sleep Anywhere</span><p>You know how camp comfortably in the wild. When trying to locate a good site for camp, or when setting up camp equipment—tents, campfires, etc—you roll with advantage.</p><p><b>Scrap Fire. </b>You can spend 1 action and 1 scrap to light a basic campfire that lasts for up to 1 hours.</p><p><b>Scrap Tent. </b>You can spend 10 minutes and 6 scrap to make an improvised tent large enough for 2 Medium creatures or 1 Large creature that lasts for up to 8 hours</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Tireless</span><p>When you complete a short or long rest, you gain a number of temporary hit points equal to your ranger level plus your Wisdom modifier.</p></span></td></tr>','<tr><td><span class="class-feature-title d-flex justify-content-between"><span>Traps</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "traps")\'>[+]</span></span><p>You can construct ranger traps that can bait, capture, and control your prey.</p><p><b>Preparing your Traps.</b> When you finish a short or long rest, you can spend any amount of your remaining scrap to prepare a number of traps of your choice.</p><p>At any one time, you can have a maximum number of prepared traps equal to your Wisdom modifier. Prepared traps that have not been activated by the time you finish a long rest expire automatically</p><p><b>Activating a Trap.</b> Once per turn, you may activate one of your prepared traps if its condition has been met. When you activate a trap, it is expended. Some traps may require your target to make a saving throw—the DC is calculated as follows:</p><p class="text-center"><b>Trap Save DC</b> = 8 + your proficiency bonus + your Wisdom Modifier</p><p><b>Salvaging Traps.</b> If you activate one of your ranger traps and it doesn’t work or you want to change one of your prepared traps, you can spend 1 minute to salvage it. You recover up to half of the scrap that was used to prepare the trap (rounded up).</p><span style="display: none" id="traps"><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Distracting Trap</span><p>Spend 1 scrap to prepare a distracting trap. When a creature moves adjacent to you or your allies, you can activate a distracting trap. The creature must make a Wisdom saving throw. On a failed save, the creature is distracted by your trap and another creature of your choice that is adjacent to the distracted creature can spend their reaction to move up to 10 feet without provoking an attack of opportunity from it.</p><p><b>Extra-Strong.</b> (+1 scrap) Up to two creatures of your choice can move away from your distracted prey.</p><p><b>Distracting.</b> (+1 scrap) The maximum distance increases from 10 feet to 15 feet.</p><p><b>Interrupt.</b> (+1 scrap) Instead of moving, your chosen creature can spend their reaction to make a melee attack against the distracted creature.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Smoke Trap</span><p>Spend 1 scrap to prepare a smoke trap. When a creature moves within 15 feet of you or your allies, you can activate a smoke trap.</p><p>It creates a 10-foot-radius sphere of smoke centered on the triggering creature. The smoke spreads around corners, and its area is heavily obscured. It lasts for 1 minute or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p><p><b>Blinding.</b> (+2 scrap) Any creature within the smoke when it is released must make a Constitution saving throw. On a failed save, a creature is blinded until the turn after it steps out of the smoke or after using an action to wash its eyes.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Pit Trap</span><p>Spend 1 scrap to prepare a pit trap in a location of your choice that you can work on. When a creature passes on the area of the trap, it activates. The creature must make a Dexterity saving throw. On a failed save, the creature falls into a 10-foot-by-10-foot pit that is 20 feet deep. It takes you an hour to dig this trap and camouflage it. You may receive the help of a companion to reduce the time requirement by half.</p><p>The creature must be on the ground, and the ground must be sufficiently deep and soft/fragile for your pit without causing a bottomless hole.</p><p><b>Slippery.</b> (+1 scrap) Attempts to climb out of this trap are made with disadvantage.</p><p><b>Spiked.</b> (+1 scrap) On a failed save, spikes at the bottom of the pit deal 2d4 piercing damage.</p><p><b>Scaled.</b> (+1 scrap) You can increase the diameter or depth of your pit by 5 feet per scrap spent. Any increase in dimensions add 10 minutes to the preparation time.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Rockslide Trap</span><p>Spend 1 scrap to prepare a rockslide trap. When a creature that you can see moves adjacent to a wall of equal or greater height, you can activate a rockslide trap. The creature must make a Strength saving throw. On a failed save, the creature is knocked prone.</p><p>The environment will be damaged potentially compromising the structural integrity of the area.</p><p><b>Bludgeoning.</b> (+1 scrap) On a failed save, the creature takes 2d4 bludgeoning damage per scrap spent.</p><p><b>Dusty.</b> (+1 scrap) On a failed save, the creature is blinded until the end of its next turn.</p><p><b>Stunning.</b> (+3 scrap) On a failed save, the creature is stunned until the end of its next turn.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Snare Trap</span><p>Spend 1 scrap to prepare a snare trap. When a creature that you can see moves within 15 feet of you or one of your allies, you can activate a snare trap. The creature must make a Dexterity saving throw. On a failed save, the creature is grappled until the end of its next turn. A grappled creature can attempt to break free early using force by spending an action to make an Athletics check against your Trap DC.</p><p><b>Durable.</b> (+1 scrap) Attempts to break free of this trap are made with disadvantage.</p><p><b>Piercing.</b> (+1 scrap) On a failed save, the creature takes 2d4 piercing damage.</p><p><b>Tenacious.</b> (+1 scrap) On a failed save, the creature is grappled for one additional turn.</p><span class="class-feature-subtitle" style="font-size: 1.2rem, font-weight: bold">Stench Trap</span><p>Spend 1 scrap to prepare a stench trap. When a creature that you can see within 30 feet of you makes a weapon attack against you or your allies, you can activate a stench trap. The creature must make a Constitution saving throw. On a failed save, the creature is covered with a disgusting scent until the end of its turn and must make its attack with disadvantage.</p><p><b>Sneezing.</b> (+1 scrap) On a failed save, attacks against it are made at advantage until the start of its next turn.</p><p><b>Spores.</b> (+2 scrap) On a failed save, the creature is poisoned until the start of its next turn.</p><p><b>Toxic.</b> (+1 scrap) On a failed save, the creature takes 2d4 poison damage.</p></span></td></tr>','<tr><td><span class="class-feature-title d-flex justify-content-between"><span>Fighting Style</span><span class="collapsing-button" aria-expanded="false" role="button" onClick=\'collapsingButton(this, "ranger-fighting-styles")\'>[+]</span></span><p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take the same Fighting Style option more than once, even if you get to choose again.</p><span style="display: none" id="ranger-fighting-styles"><span class="class-feature-subtitle">Archery</span><p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p><span class="class-feature-subtitle">Close Quarters Shooter</span><p>When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.</p><span class="class-feature-subtitle">Defense</span><p>While you are wearing armor, you gain a +1 bonus to AC.</p><span class="class-feature-subtitle">Dueling</span><p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p><span class="class-feature-subtitle">Two-Weapon Fighting</span><p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p></span></td></tr>','<tr><td><span class="class-feature-title">Ranger Archetype</span><p>At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Extra Attack</span><p>You can attack twice, instead of once, whenever you take the Attack action on your turn.</p></td></tr>','<tr><td><span class="class-feature-title">Ranger’s Prey</span><p>Choose one of the following options.</p><ul><li><b>Colossus Slayer.</b> Once per turn, when you hit a creature with a weapon attack, the creature takes an extra 1d6 damage if it’s below its hit point maximum.</li><li><b>Giant Killer.</b> When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.</li><li><b>Horde Breaker.</b> Once during your turn, when you make a weapon attack, you can make another attack with the same weapon against a  different creature that is within 5 feet of the original target and within range of your weapon.</li></ul></td></tr>','<tr><td><span class="class-feature-title">Ranger Archetype Feature</span><p>At 7th level, you gain a feature granted to you by your Ranger Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Defensive Tactics</span><p>Choose one of the following options.</p><ul><li><b>Escape the Horde.</b> Opportunity attacks against you are made with disadvantage.</li><li><b>Multiattack Defense.</b> When a creature hits you with a weapon attack, you gain a +4 bonus to AC against all subsequent weapon attacks made by that creature for the rest of the turn.</li><li><b>Steel Will. </b> You have advantage on saving throws against being frightened and charmed.</li></ul></td></tr>','<tr><td><span class="class-feature-title">Hide in Plain Sight</span><p>You can spend 1 minute and 1 scrap to create camouflage for yourself. You must also have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.</p><p>Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</p></td></tr>','<tr><td><span class="class-feature-title">Ranger Archetype Feature</span><p>At 11th level, you gain a feature granted to you by your Ranger Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Ranger’s Strike</span><p>Choose one of the following options. You may use your chosen strike a number of times equal to your Wisdom modifier, and you regain expended uses when you finish a long rest.</p><ul><li><b>Volley.</b> You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, and you make a separate attack roll for each target.</li><li><b>Whirlwind Attack.</b> You can use your action to make a melee attack against any number of creatures within 5 feet of you by making a separate attack roll for each target.</li></ul></td></tr>','<tr><td><span class="class-feature-title">Vanish</span><p>You can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by natural senses unless you choose to leave a trail.</p></td></tr>','<tr><td><span class="class-feature-title">Ranger Archetype Feature</span><p>At 15th level, you gain a feature granted to you by your Ranger Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Relentless</span><p>When you roll initiative and have less than your maximum hit points, you gain temporary hit points equal to your ranger level plus your Wisdom modifier.</p></td></tr>','<tr><td><span class="class-feature-title">Feral Senses</span><p>You gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Foe Slayer</span><p>You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against a marked quarry. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.</p></td></tr>'],
        archetypes:[{
            archetypeName: "Dervish",
            archetypeFeatures: ["Sand Sprinter","Dervish Dance","Sandstorm","Sirocco","Dune Swimmer"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Dervish</span><p>You are one of the legendary Dervish: fierce, lighting fast warriors who call the desert their home. Though there are others who profess skill at fighting with a pair of weapons, there are none that compare to the absolute mastery of the style the dervish hold. As well, they excel at both distraction and misdirection, and seem to be able to bend the sands of their homeland to their whim.</p><p><b>Prerequisites: </b>Two-Weapon Fighting style.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Sand Sprinter</span><p>Moving through sand and similar materials cost you no extra movement. Additionally, your base walking speed increases by 5 feet. At 7th level, this movement speed bonus increases to 10 feet, and at 15th level it increases to 15 feet.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Dervish Dance</span><p>If you have moved at least 10 feet toward a target on your turn, you can attack twice instead of once when you use your bonus action to engage in two-weapon fighting using two light weapons. The movement must be made before triggering your bonus action to attack. The extra attack is made at disadvantage until you reach 11th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Sandstorm</span><p>You learn to kick up an obscuring cloud of sand around yourself while you move. When you move more than 15 feet on your turn, you can use an action and 1 scrap to cause your space to become heavily obscured until the start of your next turn. Your ability to see is unhindered by this effect.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Sirocco</span><p>While wielding a light melee weapon in each hand, you can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Dune Swimmer</span><p>You learn the secret of moving through the dunes. You gain a burrow speed in sand and similar materials equal to half your walking speed. While burrowing, you gain tremorsense of 15 feet, and you can breathe for up to 1 minute while submerged by using 2 scrap. Once per turn, if you exit the sand next to a foe on your turn, you gain advantage on your first attack against that creature.</p></td></tr>']
        },{
            archetypeName: "Doppelkin Master",
            archetypeFeatures: ["Ranger’s Companion","Mimic Adaptations","Linked Adaptations","Greater Bond","Superior Doppelkin"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Doppelkin Master</span><p>The Doppelkin Master archetype embodies a friendship between the so-called civilized races and the bizarre doppelkin. Doppelkin are ooze-like entities found in oases uncovered by the Shifting Sands, deep below in caverns still damp from underground rivers, and sometimes within geodes housing forgotten children born from the Sundering.</p><p>These amorphous doppelkin lie in wait, sentient but in stasis, to one day take form and be part of the world. They take the shape and characteristics of creatures that they have eaten or absorbed. The Doppelkin Master finds these unformed creatures and, united in focus, work as one to fight the monstrous foes that threaten the ranger, the doppelkin, and wilderness alike.</p><p>Emulating the Doppelkin Master archetype means committing yourself to this ideal, working in partnership with this alien-like creature as its companion and friend.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Ranger’s Companion</span><p>You gain a doppelkin companion that accompanies you on your adventures and is mentally linked to you. This connection makes it an ideal partner to fight alongside you. The doppelkin has an alien mentality that is malleable, and it will adapt its mind to whatever shape it takes or to its master if it has one.</p><p>Choose a beast that has a challenge rating of 1/4 or lower that is Large or smaller. You use 3 scrap to construct a hatchery for the doppelkin, and after a short rest, it takes on the general appearance and features of that beast. Add your proficiency bonus to the doppelkin’s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher.</p><p>Like any creature, the doppelkin can spend Hit Dice during a short and long rest. If the doppelkin takes on form that you can mount, it will serve in that role to the best of its ability. Also, the doppelkin will have inventory space appropriate for its build and size given proper containers or gear.</p><p>The doppelkin obeys your commands as best as it can. It takes its turn on your initiative. The doppelkin’s natural impulse is to stay near and defend you. On your turn if you have line of sight on your companion, you can telepathically command the doppelkin where to move (no action required by you).</p><p>You can use your bonus action to telepathically command it to take the Attack, Dash, Disengage, or Help action. If you don’t issue a command, the doppelkin will attack any creature hostile to you near it or continue a command you have already given it.</p><p>If you are incapacitated or absent, the doppelkin acts on its own, focusing on protecting you and itself. The doppelkin never requires your command to use its reaction such as when making an opportunity attack.</p><p>If your doppelkin companion dies, you can obtain another companion by spending 3 scrap and a short rest creating another hatchery and waiting for it to develop. You can obtain more doppelkin geodes or oozes through bartering with collectors or spending a day searching in areas where they are known to be found.</p><p>To change the form of your doppelkin requires a freshly slain or properly preserved sample of the target creature. Your companion can take the form of more powerful creatures as you bond. Refer to the Doppelkin Progression Chart below.</p><table class="table table-striped table-bordered"><th class="text-center">Ranger Level</th><th class="text-center">From CR</th><th class="text-center">Special Attack Max Dmg</th><th class="text-center">Number of Adaptations</th><th class="text-center">Maximum Size</th></tr><tr><td class="text-center">3</td><td class="text-center">1/4</td><td class="text-center">1d6</td><td class="text-center">1</td><td class="text-center">Large</td></tr><tr><td class="text-center">7</td><td class="text-center">1/2</td><td class="text-center">1d8</td><td class="text-center">2</td><td class="text-center">Large</td></tr><tr><td class="text-center">11</td><td class="text-center">1</td><td class="text-center">1d10</td><td class="text-center">3</td><td class="text-center">Large</td></tr><tr><td class="text-center">15</td><td class="text-center">2</td><td class="text-center">1d12</td><td class="text-center">4</td><td class="text-center">Huge</td></tr></table>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Mimic Adaptations</span><p>Your doppelkin companion has a unique ability that makes it stand apart from trained pets. This unusual quality allows it to mimic and take on features or abilities of other creatures by absorbing a significant portion of a freshly slain or properly preserved specimen. If new appendages are necessary to take on the adaptation, the doppelkin changes its form to accommodate them.</p><p>The doppelkin can quickly consume the sample over the course of 10 minutes, but it requires at least a 1-hour short rest to complete the process. When your doppelkin consumes the sample, that portion of the body becomes unusable for other purposes such as harvesting. Harvestable areas remaining depend on the size of the creature and the nature of the adaptation the doppelkin is acquiring.</p><p>As your companionship deepens, your doppelkin grows in power and can take on more adaptations. Starting at 3rd level, the doppelkin can mimic one adaptation.</p><p>This ability increases to 2 adaptations at 7th level, 3 at 11th level, and 4 at 15th level.</p><span class="class-feature-subtitle">Mimic Adaptation Categories</span><p><b>Movement. </b>Your companion can increase its base speed or add a new movement type such as burrowing, swimming, climbing, or flying.</p><p><b>Senses. </b>The doppelkin can improve its senses, gaining features such as darkvision, tremorsense, or keen senses.</p><p><b>Armor. </b>Your companion can improve its AC or durability by mimicking the creature. Benefits can include damage resistance or reduction, improved maneuverability, and retaliatory protection.</p><p><b>Special Attacks. </b>The doppelkin can take an adaptation to gain a new attack. This adaptation requires a bonus action to command the doppelkin to use the special attack.</p><p>Final details of the damage type and nature of the attack (such as a natural spit weapon) are subject to GM approval. In general, the attack will match as closely as possible to the original creature or have a damage die of 1d6 at 3rd level, whichever is higher.</p><p>This ability increases to 1d8 at 7th level, 1d10 at 11th level, and 1d12 at 15th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Linked Adaptations</span><p>Your ability to bond with a doppelkin allows you to gain some of its adaptations. Over a 1-hour short rest, you must ingest a portion of the doppelkin and tap Hit Dice to gain these benefits (see table below). You can take as many adaptations that you can afford, but you can never take the same adaptation more than once or tap your Hit Die below 1.</p><p>Tapping Hit Dice means they are expended and unavailable to use for other abilities or for healing. It takes a 1-hour short rest to link, unlink, or exchange adaptations.</p><p>A special attack adaptation requires a bonus action to activate. At 15th level, you can activate the same special attack for yourself and your companion with a bonus action.</p><p>Any costs or adaptations not addressed here must be directed to the GM.</p><table class="table table-striped table-bordered"><th class="text-center">Adaptation</th><th class="text-center">Hit Die</th></tr><tr><td class="text-center">Base Movement Increase</td><td class="text-center">1</td></tr><tr><td class="text-center">Climbing or Swimming</td><td class="text-center">1</td></tr><tr><td class="text-center">Burrowing</td><td class="text-center">2</td></tr><tr><td class="text-center">Flying</td><td class="text-center">5</td></tr><tr><td class="text-center">Darkvision</td><td class="text-center">1</td></tr><tr><td class="text-center">Keen Senses</td><td class="text-center">1</td></tr><tr><td class="text-center">Tremorsense</td><td class="text-center">2</td></tr><tr><td class="text-center">Improved AC</td><td class="text-center">1-2</td></tr><tr><td class="text-center">Damage Resistance/Reduction</td><td class="text-center">1</td></tr><tr><td class="text-center">Special Attacks</td><td class="text-center">1-3</td></tr></table></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Greater Bond</span><p>Your bond has grown so powerful with your companion that you can try to save one another from disaster. If your doppelkin is about to drop to 0 hit points, you can use your reaction and expend 1 Hit Die to have it drop to 1 hit point instead. Alternatively, if you are about to drop to 0 hit points, your doppelkin will use its reaction and expend 1 Hit Die if it has any left to have you drop to 1 hit point instead.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Superior Doppelkin</span><p>You are an expert in doppelkin biology and can find just the right nourishment to help it evolve. Your companion can now take on a Huge form, gaining more inventory space with its size increase</p><p>Additionally, when you use a bonus action to command the doppelkin to make a special attack with an adaptation, it can also make one weapon attack.</p></td></tr>']
        },{
            archetypeName: "Slayer",
            archetypeFeatures: ["Martial Superiority","Slayer’s Mind","Slayer’s Defense","Slayer's Counter"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype"></span><p>You have dedicated yourself to hunting down the worst of that the wastes have to offer. You are a bulwark between the remnants of civilization that remain and the terrors of the wilderness. As you walk the Slayer’s path, you have honed your martial prowess to become the ultimate defender of the balance between people and the natural order.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Martial Superiority</span><p>You learn <i>maneuvers</i> that are fueled by special dice called <i>superiority dice</i>.</p><p><b>Maneuvers.</b> You learn two maneuvers of your choice, which are chosen from the list of maneuvers available to fighters with the Battle Master archetype. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.</p><p>You learn one additional maneuver of your choice at 7th, 11th, and 15th levels. Each time you learn a new maneuver, you can also replace one maneuver you know with a different one.</p><p><b>Superiority Dice.</b> You have 2 superiority dice, which are d8s. A superiority die is expended when you use it. You regain all your expended superiority dice when you finish a short or long rest.</p><p>You gain an additional superiority die at 7th, 11th, and 15th levels.</p><p><b>Saving Throws.</b> Some of your maneuvers require your target to make a saving throw to resist the maneuver\'s effects.</p><p class="text-center"><b>Maneuver Saving Throw DC</b> = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Slayer’s Mind</span><p>You gain extra resilience against your prey\'s assaults on your mind and body. Whenever the target of your marked quarry forces you to make a saving throw and whenever you make an ability check to escape that target\'s grapple, add 1d6 to your roll.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Slayer’s Defense</span><p>Choose one of the following options</p><p><b>Evasion.</b> You can nimbly dodge out of the way of certain area effects, such as a duneworm’s acid spray or an exploding mysterium. When you are subjected to an effect that allowsyou to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail</p><p><b>Stand Against the Tide.</b> When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice</p><p><b>Uncanny Dodge. </b>When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\'s damage against you.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Slayer\'s Counter</span><p>You gain the ability to counterattack when your prey tries to sabotage you. If the target of your marked quarry forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds in addition to the attack\'s normal effects</p></td></tr>']
        }]
    };

    var rogue = {
        hd: "1d8" ,
        hp1stlvl: "8",
        hphigherlvl: "1d8 (or 5) + your Constitution modifier per Rogue",
        armorprof: "light armor.",
        weaponprof: "simple weapons, hand crossbows, longswords, rapiers, shortswords.",
        skillandtools: "four",
        className: "Rogue",
        classAdditionalFeatures: ["Sneak Attack"],
        features: ["Expertise, Sneak Attack, Thieves' Cant","Cunning Action, Cunning Action: Aim","Roguish Archetype","Ability Score Improvement","Uncanny Dodge","Expertise","Evasion","Ability Score Improvement","Roguish Archetype Feature","Ability Score Improvement","Reliable Talent","Ability Score Improvement","Roguish Archetype Feature","Blindsense","Slippery Mind","Ability Score Improvement","Roguish Archetype Feature","Elusive","Ability Score Improvement","Stroke of Luck"],
        extraFeatures: ["1d6","1d6","2d6","2d6","3d6","3d6","4d6","4d6","5d6","5d6","6d6","6d6","7d6","7d6","8d6","8d6","9d6","9d6","10d6","10d6"],
        featuresDesc:['<tr><td><span class="class-feature-title">Expertise</span><p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves\' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p><p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves\' tools) to gain this benefit.</p></td></tr>','<tr><td><span class="class-feature-title">Sneak Attack</span><p>Beginning at 1st level, you know how to strike subtly and exploit a foe\'s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.</p><p>You don\'t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn\'t incapacitated, and you don\'t have disadvantage on the attack roll.</p><p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.</p></td></tr>','<tr><td><span class="class-feature-title">Thieves\' Cant</span><p>During your rogue training you learned thieves\' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves\' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p><p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves\' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p></td></tr>','<tr><td><span class="class-feature-title">Cunning Action</span><p>Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.</p></td></tr>','<tr><td><span class="class-feature-title">Cunning Action: Aim</span><p>You gain an additional way to use your Cunning Action: carefully aiming your next attack. As a bonus action, you give yourself advantage on your next attack roll on the current turn. You can use this bonus action only if you haven\'t moved during this turn, and after you use the bonus action, your speed is 0 until the end of the current turn.</p></td></tr>','<tr><td><span class="class-feature-title">Roguish Archetype</span><p>At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities from the list of available archetypes. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Uncanny Dodge</span><p>Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\'s damage against you.</p></td></tr>','<tr><td><span class="class-feature-title">Expertise</span><p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves\' tools) to gain the benefit of Expertise.</p></td></tr>','<tr><td><span class="class-feature-title">Evasion</span><p>Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon\'s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Roguish Archetype Feature</span><p>At 9th level, you gain a feature granted by your Roguish Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 10th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Reliable Talent</span><p>By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Roguish Archetype Feature</span><p>At 13th level, you gain a feature granted by your Roguish Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Blindsense</span><p>Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.</p></td></tr>','<tr><td><span class="class-feature-title">Slippery Mind</span><p>By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Roguish Archetype Feature</span><p>At 17th level, you gain a feature granted by your Roguish Archetype.</p></td></tr>','<tr><td><span class="class-feature-title">Elusive</span><p>Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren\'t incapacitated.</p></td></tr>','<tr><td><span class="class-feature-title">Ability Score Improvement</span><p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.</p><p>If your DM allows the use of feats, you may instead take a feat.</p></td></tr>','<tr><td><span class="class-feature-title">Stroke of Luck</span><p>At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.</p><p>Once you use this feature, you can\'t use it again until you finish a short or long rest.</p></td></tr>'],
        archetypes:[{
            archetypeName: "Assassin",
            archetypeFeatures: ["Assassinate","Bonus Proficiencies","Infiltration Expertise","Impostor","Death Strike"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Assassin</span><p>You focus your training on the grim art of death. Those who adhere to this archetype are diverse - hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.</p><p>Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Assassinate</span><p>Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn\'t taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Bonus Proficiencies</span><p>When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner\'s kit.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Infiltration Expertise</span><p>Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can\'t establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official-looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.</p><p>Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Impostor</span><p>At 13th level, you gain the ability to unerringly mimic another person\'s speech, writing, and behavior. You must spend at least three hours studying these three components of the person\'s behavior, listening to speech, examining handwriting, and observing mannerism.</p><p>Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Death Strike</span><p>Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.</p></td></tr>']
        },{
            archetypeName: "Inquisitive",
            archetypeFeatures: ["Ear for Deceit","Eye for Detail","Insightful Fighting","Steady Eye","Unerring Eye","Eye for Weakness"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Inquisitive</span><p>As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your keen deductions make you well equipped to expose and end hidden evils.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Ear for Deceit</span><p>When you choose this archetype at 3rd level, you develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Eye for Detail</span><p>Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Insightful Fighting</span><p>At 3rd level, you gain the ability to decipher an opponent\'s tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn\'t incapacitated, contested by the target\'s Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don\'t have advantage on the attack roll, but not if you have disadvantage on it.</p><p>This benefit lasts for 1 minute or until you successfully use this feature against a different target.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Steady Eye</span><p>Starting at 9th level, you have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Unerring Eye</span><p>Beginning at 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren\'t blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.</p><p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Eye for Weakness</span><p>At 17th level, you learn to exploit a creature\'s weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.</p></td></tr>']
        },{
            archetypeName: "Psi Assassin",
            archetypeFeatures: ["Farhanded","Psionic Power","Psychic Blades","Soul Blades","Psionic Veil","Rend Mind"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Psi Assassin</span><p>Most assassins strike with physical weapons, and many burglars and spies use thieves’ tools to infiltrate secure locations, whereas a Psi Assassin strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of a tribal leader’s spy network, though they are often mistrusted by less able spies or more physical assassins.</p><p>Your psionic abilities might have haunted you since you were a child, only revealing their potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psionic adepts and spent years learning how to manifest your power.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Farhanded</span><p>You know the Far Hand talent and you can perform the following additional tasks with it:</p><ul><li>You can stow one object the hand is holding in a container worn or carried by another creature.</li><li>You can retrieve an object in a container worn or carried by another creature.</li><li>You can use thieves\' tools to pick lock and disarm traps at range.</li></ul><p>You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature\'s Wisdom (Perception) check.</p><p>In addition, you can use the bonus action granted by your Cunning Action to control the hand.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psionic Power</span><p>You harbor a wellspring of psionic power within yourself. The energy that ebbs and flows as you channel it in various ways is represented by your Psionic Power die, the starting size of which is a d6.</p><p><b>Psionic Power Options.</b> You can use your Psionic Power die in the following ways:</p><p><b>Psi-Bolstered Knack.</b> When your non-psionic training fails you, you can tap into your psionic power to help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll your Psionic Power die and add the number rolled to the check, potentially turning failure into success.</p><p><b>Psychic Whispers.</b> You can use your psychic abilities to establish telepathic communication between yourself and others—perfect for quiet infiltration. As an action, you give yourself and at least one other creature the ability to speak telepathically with each other. When you do so, roll your Psionic Power die, and choose creatures you can see, up to a number of creatures equal to the number rolled. For 1 hour, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can’t use this telepathy if it can’t speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don’t need to speak a common language to understand each other.</p><p><b>Changing the Die’s Size.</b> If you roll the highest number on your Psionic Power die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a d6 and you roll a 6, it becomes a d4. If it’s a d4 and you roll a 4, it becomes unusable until you finish a long rest.</p><p>Conversely, if you roll a 1 on your Psionic Power die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a d4, the die then becomes a d6.</p><p>Whenever you finish a long rest, your Psionic Power die resets to its starting size. When you reach certain levels in this class, the starting size of your Psionic Power die increases: at 5th level (d8), 11th level (d10), and 17th level (d12).</p><p><b>Psi Replenishment.</b> As a bonus action, you can calm your mind for a moment and restore your Psionic Power die to its starting size. You then cannot use Psi Replenishment again until you finish a long rest.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psychic Blades</span><p>You can manifest your psionic power as shimmering blades of psychic energy. When you are about to make a melee or ranged weapon attack against a creature, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a maximum range of 60 feet, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.</p><p>After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6, plus the ability modifier you used for the attack roll.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Soul Blades</span><p>Your Psychic Blades are now an expression of your psi-suffused soul, giving you finer control over them in the following ways:</p><p><b>Homing Strikes.</b> If you make an attack roll with your Psychic Blades and miss the target, you can roll your Psionic Power die and add the number rolled to the attack roll. If this causes the attack to hit, your Psionic Power die decreases by one die size, regardless of the number rolled.</p><p><b>Psychic Teleportation.</b> If your Psionic Power die is available, you can hurl your Psychic Blades to magically transport yourself to another location. As a bonus action, you manifest one of your Psychic Blades and throw it at an unoccupied space you can see, up to a number of feet away equal to 5 times the highest number on your Psionic Power die. You then teleport to that space, the blade vanishes, and your Psionic Power die decreases by one die size.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Psionic Veil</span><p>You can weave a veil of psychic static to mask yourself. As an action, you can magically become invisible, along with anything you are wearing or carrying, for 10 minutes or until you dismiss this effect (no action required). This invisibility ends if you deal damage to a creature or if you force a creature to make a saving throw.</p><p>Once you use this feature, you can’t do so again until you finish a long rest, unless you decrease your Psionic Power die by one die size to use this feature again.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Rend Mind</span><p>You can sweep your Psychic Blades directly through a creature’s mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). Unless the save succeeds, the target is stunned until the end of your next turn.</p><p>Once you use this feature, you can’t do so again until you finish a long rest, unless you decrease your Psionic Power die by one die size to use this feature again.</p></td></tr>']
        },{
            archetypeName: "Scout",
            archetypeFeatures: ["Skirmisher","Survivalist","Superior Mobility","Ambush Master","Sudden Strike"],
            archetypeFeaturesDesc: ['<tr><td><span class="class-feature-title class-feature-archetype">Scout</span><p>You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter—these are just a few of the roles that Scouts assume as they range the world.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Skirmisher</span><p>Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn\'t provoke opportunity attacks.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Survivalist</span><p>When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills if you don\'t already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Superior Mobility</span><p>At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Ambush Master</span><p>Starting at 13th level, you excel at leading ambushes and acting first in a fight.</p><p>You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.</p></td></tr>','<tr><td><span class="class-feature-subtitle class-feature-archetype">Sudden Strike</span><p>Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can\'t use your Sneak Attack against the same target more than once in a turn.</p></td></tr>']
        }]
    };

    var classSelection = document.getElementById('class-selection');
    var classTable = document.getElementById('class-table');
    var classFeatures = document.getElementById('class-feature-body');
    var profBox = document.getElementById('prof-box');
    var currentFilterClass = classSelection.getElementsByClassName('active');

    let classFeatureDisplay = '';

    function collapsingButton(button, id) {
        var section = document.getElementById(id);
        if (button.innerText.includes('[-]')) {
            button.innerText = '[+]';
        } else {
            button.innerText = '[-]';
        }
        if (section.style.display == "block") {
            section.style.display = "none"
        } else {
            section.style.display = "block"
        }

        
    }

    function baseClassDisplay(baseClass, currentClass){
        //baseClass
        sessionStorage.setItem("currentClassDisplay", currentClass);
        classTable.querySelector('#class-table-title').innerHTML = baseClass.className;

        if (baseClass.classAdditionalFeatures != '') {
            for(var i = 0; i < baseClass.classAdditionalFeatures.length; i++){
                classTable.rows[2].cells[3+i].innerHTML = baseClass.classAdditionalFeatures[i];
            };
            for(var i = 0; i < baseClass.extraFeatures.length; i++){ 
                if (baseClass.classAdditionalFeatures.length == 1) {
                    classTable.rows[3+i].cells[3].innerHTML = baseClass.extraFeatures[i];
                } else {
                    for (let a = 0; a < baseClass.extraFeatures[i].length; a++) {
                        classTable.rows[3+i].cells[3+a].innerHTML = baseClass.extraFeatures[i][a];
                        
                    }
                }
            };
        }
        for(var i = 0; i < baseClass.features.length; i++){
            classTable.querySelector('#features' + (i+1)).innerHTML = baseClass.features[i];
        };    

        profBox.querySelector('#profBoxName').innerHTML = baseClass.className;
        profBox.querySelector('#hd').innerHTML = baseClass.hd;
        profBox.querySelector('#hp1stlvl').innerHTML = baseClass.hp1stlvl;
        profBox.querySelector('#hphigherlvl').innerHTML = baseClass.hphigherlvl;
        profBox.querySelector('#armorprof').innerHTML = baseClass.armorprof;
        profBox.querySelector('#weaponprof').innerHTML = baseClass.weaponprof;
        profBox.querySelector('#skillandtools').innerHTML = baseClass.skillandtools;

        //baseClass
    }

    function displayClass(classToDisplay = "barbarian", refreshed = false) {

        
        let classSelected = classToDisplay;
        if (classSelected == null) {
            classSelected = 'barbarian'
        }
        let archetypeTag = document.getElementsByClassName('archetype-features');
        let featureIndex = 0;
        if (!refreshed) {
            classSelected =  event.target.getAttribute('id');
            if(classSelected != null){
                if (classSelected.includes('-name') || classSelected.includes('-pill')) {
                    classSelected = classSelected.slice(0, classSelected.indexOf('-'));
                }
            }
            
        }
        if (!classSelected.includes('archetype')){
            for (let row = 2; row < classTable.rows.length-1; row++) {
                classTable.rows[row].cells[3].innerHTML = "";
                classTable.rows[row].cells[4].innerHTML = "";
                classTable.rows[row].cells[5].innerHTML = "";
            }
        }

        switch (classSelected) {
            case "barbarian":

                baseClassDisplay(barbarian, 'barbarian');

                //Class Features

                classFeatureDisplay = '';

                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case "fighter":

                baseClassDisplay(fighter, 'fighter');

                //Class Table
                classTable.querySelector('#class-table-title').innerHTML = fighter.className;
                for(var i = 0; i < fighter.features.length; i++){
                    classTable.querySelector('#features' + (i+1)).innerHTML = fighter.features[i];
                };


                //Proficiencies and HP/HD
                profBox.querySelector('#profBoxName').innerHTML = "Fighter";
                profBox.querySelector('#hd').innerHTML = fighter.hd;
                profBox.querySelector('#hp1stlvl').innerHTML = fighter.hp1stlvl;
                profBox.querySelector('#hphigherlvl').innerHTML = fighter.hphigherlvl;
                profBox.querySelector('#armorprof').innerHTML = fighter.armorprof;
                profBox.querySelector('#weaponprof').innerHTML = fighter.weaponprof;
                profBox.querySelector('#skillandtools').innerHTML = fighter.skillandtools;

                //Class Features

                classFeatureDisplay = '';

                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case "monk":

                baseClassDisplay(monk, 'monk');

                
                //Class Features

                classFeatureDisplay = '';

                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case "ranger":

                baseClassDisplay(ranger, 'ranger');

                //Class Features
                
                classFeatureDisplay = '';

                ranger.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case "rogue":

                baseClassDisplay(rogue, 'rogue');

                //Class Features
                
                classFeatureDisplay = '';

                rogue.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
        
        ///////Barbarian Archetypes
            case 'ancestral-guardian-archetype':

                baseClassDisplay(barbarian, 'ancestral-guardian-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[0].archetypeName + ', ' +  barbarian.archetypes[0].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[0].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[0].archetypeFeatures[2];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[0].archetypeFeatures[3];


                //Feature description

                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;


                break;
            case 'battlerager-archetype':

                baseClassDisplay(barbarian, 'battlerager-archetype');

                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[1].archetypeName + ', ' +  barbarian.archetypes[1].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[1].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[1].archetypeFeatures[2];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[1].archetypeFeatures[3];


                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                
                break;
            case 'beast-archetype':

                baseClassDisplay(barbarian, 'beast-archetype');

                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[2].archetypeName + ', ' +  barbarian.archetypes[2].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[2].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[2].archetypeFeatures[2];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[2].archetypeFeatures[3];


                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
            break;
            case 'berserker-archetype':

                baseClassDisplay(barbarian, 'berserker-archetype');

                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[3].archetypeName + ', ' +  barbarian.archetypes[3].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[3].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[3].archetypeFeatures[2];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[3].archetypeFeatures[3];


                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
            break;
            case 'primal-warrior-archetype':

                baseClassDisplay(barbarian, 'primal-warrior-archetype');

                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[4].archetypeName + ', ' +  barbarian.archetypes[4].archetypeFeatures[0] + ', ' +  barbarian.archetypes[4].archetypeFeatures[1];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[4].archetypeFeatures[2];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[4].archetypeFeatures[3];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[4].archetypeFeatures[4];


                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'totem-warrior-archetype':

                baseClassDisplay(barbarian, 'totem-warrior-archetype');


                //Class Table
                classTable.rows[5].cells[2].innerHTML = barbarian.archetypes[5].archetypeName + ', ' +  barbarian.archetypes[5].archetypeFeatures[0] + ', ' +  barbarian.archetypes[5].archetypeFeatures[1];
                classTable.rows[8].cells[2].innerHTML = barbarian.archetypes[5].archetypeFeatures[2];
                classTable.rows[12].cells[2].innerHTML = barbarian.archetypes[5].archetypeFeatures[3];
                classTable.rows[16].cells[2].innerHTML = barbarian.archetypes[5].archetypeFeatures[4];


                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                barbarian.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Primal Path<')){
                        classFeatureDisplay += barbarian.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += barbarian.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Path Feature<')) {
                        classFeatureDisplay += barbarian.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
        
        
        ///////Fighter Archetypes    
            case 'battle-master-archetype':

                baseClassDisplay(fighter, 'battle-master-archetype');

                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[0].archetypeName + ", " + fighter.archetypes[0].archetypeFeatures[0] + ", " + fighter.archetypes[0].archetypeFeatures[1] + ", " + fighter.archetypes[0].archetypeFeatures[2];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[0].archetypeFeatures[3] + ", " + fighter.archetypes[0].archetypeFeatures[4] + ", " + fighter.archetypes[0].archetypeFeatures[5];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[0].archetypeFeatures[6] + ", " + fighter.archetypes[0].archetypeFeatures[7];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[0].archetypeFeatures[8] + ', ' + fighter.archetypes[0].archetypeFeatures[9] + ", " + fighter.archetypes[0].archetypeFeatures[10];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[0].archetypeFeatures[11];
            
                //Feature description

                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<') && (feature.includes('At 7th level') || feature.includes('At 15th level'))) {
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<') && feature.includes('At 10th level') ) {
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<') && feature.includes('At 18th level') ) {
                        classFeatureDisplay += fighter.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case 'brute-archetype':

                baseClassDisplay(fighter, 'brute-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[1].archetypeName + ", " + fighter.archetypes[1].archetypeFeatures[0];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[1].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[1].archetypeFeatures[2];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[1].archetypeFeatures[3];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[1].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;

                break;
            case 'cavalier-archetype':

                baseClassDisplay(fighter, 'cavalier-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[2].archetypeName + ", " + fighter.archetypes[2].archetypeFeatures[0] + ", " + fighter.archetypes[2].archetypeFeatures[1] + ", " + fighter.archetypes[2].archetypeFeatures[2];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[2].archetypeFeatures[3];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[2].archetypeFeatures[4];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[2].archetypeFeatures[5];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[2].archetypeFeatures[6];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'champion-archetype':

                baseClassDisplay(fighter, 'champion-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[3].archetypeName + ", " + fighter.archetypes[3].archetypeFeatures[0];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[3].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[3].archetypeFeatures[2];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[3].archetypeFeatures[3];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[3].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'psi-knight-archetype':

                baseClassDisplay(fighter, 'psi-knight-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[4].archetypeName + ", " + fighter.archetypes[4].archetypeFeatures[0] + ", " + fighter.archetypes[4].archetypeFeatures[1];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[4].archetypeFeatures[2];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[4].archetypeFeatures[3];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[4].archetypeFeatures[4];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[4].archetypeFeatures[5];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'sharpshooter-archetype':

                baseClassDisplay(fighter, 'sharpshooter-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[5].archetypeName + ', ' +  fighter.archetypes[5].archetypeFeatures[0];;
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[5].archetypeFeatures[1];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[5].archetypeFeatures[2];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[5].archetypeFeatures[3];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[5].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[5].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'warcaller-archetype':

                baseClassDisplay(fighter, 'warcaller-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = fighter.archetypes[6].archetypeName  + ", " + fighter.archetypes[6].archetypeFeatures[0] + ", " + fighter.archetypes[6].archetypeFeatures[1];
                classTable.rows[9].cells[2].innerHTML = fighter.archetypes[6].archetypeFeatures[2];
                classTable.rows[12].cells[2].innerHTML = fighter.archetypes[6].archetypeFeatures[3];
                classTable.rows[17].cells[2].innerHTML = fighter.archetypes[6].archetypeFeatures[4];
                classTable.rows[20].cells[2].innerHTML = fighter.archetypes[6].archetypeFeatures[5];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                fighter.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Martial Archetype<')){
                        classFeatureDisplay += fighter.archetypes[6].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[6].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += fighter.archetypes[6].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Martial Archetype Feature<')) {
                        classFeatureDisplay += fighter.archetypes[6].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;


        ///////Monk Archetypes        
            case 'drunken-master-archetype':

                baseClassDisplay(monk, 'drunken-master-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = 'Deflect Missiles, ' + monk.archetypes[0].archetypeName + ', ' + monk.archetypes[0].archetypeFeatures[0] + ', ' + monk.archetypes[0].archetypeFeatures[1];
                classTable.rows[8].cells[2].innerHTML = 'Ki-Empowered Strikes, ' + monk.archetypes[0].archetypeFeatures[2];
                classTable.rows[13].cells[2].innerHTML = monk.archetypes[0].archetypeFeatures[3];
                classTable.rows[19].cells[2].innerHTML = monk.archetypes[0].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Monastic Tradition<')){
                        classFeatureDisplay += monk.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Monastic Tradition Feature<')) {
                        classFeatureDisplay += monk.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'kensei-archetype':

                baseClassDisplay(monk, 'kensei-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = 'Deflect Missiles, ' + monk.archetypes[1].archetypeName + ', ' + monk.archetypes[1].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = 'Ki-Empowered Strikes, ' + monk.archetypes[1].archetypeFeatures[1];
                classTable.rows[13].cells[2].innerHTML = monk.archetypes[1].archetypeFeatures[2];
                classTable.rows[19].cells[2].innerHTML = monk.archetypes[1].archetypeFeatures[3];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Monastic Tradition<')){
                        classFeatureDisplay += monk.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Monastic Tradition Feature<')) {
                        classFeatureDisplay += monk.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'long-death-archetype':

                baseClassDisplay(monk, 'long-death-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = 'Deflect Missiles, ' + monk.archetypes[2].archetypeName + ', ' + monk.archetypes[2].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = 'Ki-Empowered Strikes, ' + monk.archetypes[2].archetypeFeatures[1];
                classTable.rows[13].cells[2].innerHTML = monk.archetypes[2].archetypeFeatures[2];
                classTable.rows[19].cells[2].innerHTML = monk.archetypes[2].archetypeFeatures[3];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Monastic Tradition<')){
                        classFeatureDisplay += monk.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Monastic Tradition Feature<')) {
                        classFeatureDisplay += monk.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'open-hand-archetype':

                baseClassDisplay(monk, 'open-hand-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = 'Deflect Missiles, ' + monk.archetypes[3].archetypeName + ', ' + monk.archetypes[3].archetypeFeatures[0];
                classTable.rows[8].cells[2].innerHTML = 'Ki-Empowered Strikes, ' + monk.archetypes[3].archetypeFeatures[1];
                classTable.rows[13].cells[2].innerHTML = monk.archetypes[3].archetypeFeatures[2];
                classTable.rows[19].cells[2].innerHTML = monk.archetypes[3].archetypeFeatures[3];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Monastic Tradition<')){
                        classFeatureDisplay += monk.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Monastic Tradition Feature<')) {
                        classFeatureDisplay += monk.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'soul-knife-archetype':

                baseClassDisplay(monk, 'soul-knife-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = 'Deflect Missiles, ' + monk.archetypes[4].archetypeName + ', ' + monk.archetypes[4].archetypeFeatures[0] + ', ' + monk.archetypes[4].archetypeFeatures[1];
                classTable.rows[8].cells[2].innerHTML = 'Ki-Empowered Strikes, ' + monk.archetypes[4].archetypeFeatures[2];
                classTable.rows[13].cells[2].innerHTML = monk.archetypes[4].archetypeFeatures[3];
                classTable.rows[19].cells[2].innerHTML = monk.archetypes[4].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                monk.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Monastic Tradition<')){
                        classFeatureDisplay += monk.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += monk.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }else if (feature.includes('>Monastic Tradition Feature<')) {
                        classFeatureDisplay += monk.archetypes[4].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;

        ///////Ranger Archetypes        
            case 'dervish-archetype':

                baseClassDisplay(ranger, 'dervish-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = ranger.archetypes[0].archetypeName + ', ' + ranger.archetypes[0].archetypeFeatures[0] + ', ' + ranger.archetypes[0].archetypeFeatures[1];
                classTable.rows[9].cells[2].innerHTML = ranger.archetypes[0].archetypeFeatures[2];
                classTable.rows[13].cells[2].innerHTML = ranger.archetypes[0].archetypeFeatures[3];
                classTable.rows[17].cells[2].innerHTML = ranger.archetypes[0].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                ranger.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Ranger Archetype<')){
                        classFeatureDisplay += ranger.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += ranger.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += ranger.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Ranger Archetype Feature<')) {
                        classFeatureDisplay += ranger.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'doppelkin-archetype':

                baseClassDisplay(ranger, 'doppelkin-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = ranger.archetypes[1].archetypeName + ', ' + ranger.archetypes[1].archetypeFeatures[0] + ', ' + ranger.archetypes[1].archetypeFeatures[1];
                classTable.rows[9].cells[2].innerHTML = ranger.archetypes[1].archetypeFeatures[2];
                classTable.rows[13].cells[2].innerHTML = ranger.archetypes[1].archetypeFeatures[3];
                classTable.rows[17].cells[2].innerHTML = ranger.archetypes[1].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                ranger.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Ranger Archetype<')){
                        classFeatureDisplay += ranger.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += ranger.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += ranger.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Ranger Archetype Feature<')) {
                        classFeatureDisplay += ranger.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'slayer-archetype':

                baseClassDisplay(ranger, 'slayer-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = ranger.archetypes[2].archetypeName + ', ' + ranger.archetypes[2].archetypeFeatures[0];
                classTable.rows[9].cells[2].innerHTML = ranger.archetypes[2].archetypeFeatures[1];
                classTable.rows[13].cells[2].innerHTML = ranger.archetypes[2].archetypeFeatures[2];
                classTable.rows[17].cells[2].innerHTML = ranger.archetypes[2].archetypeFeatures[3];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                ranger.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Ranger Archetype<')){
                        classFeatureDisplay += ranger.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += ranger.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Ranger Archetype Feature<')) {
                        classFeatureDisplay += ranger.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;


        ///////Rogue Archetypes        
            case 'assassin-archetype':

                baseClassDisplay(rogue, 'assassin-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = rogue.archetypes[0].archetypeName + ', ' + rogue.archetypes[0].archetypeFeatures[0] + ', ' + rogue.archetypes[0].archetypeFeatures[1];
                classTable.rows[11].cells[2].innerHTML = rogue.archetypes[0].archetypeFeatures[2];
                classTable.rows[15].cells[2].innerHTML = rogue.archetypes[0].archetypeFeatures[3];
                classTable.rows[19].cells[2].innerHTML = rogue.archetypes[0].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                rogue.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Roguish Archetype<')){
                        classFeatureDisplay += rogue.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Roguish Archetype Feature<')) {
                        classFeatureDisplay += rogue.archetypes[0].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'inquisitive-archetype':

                baseClassDisplay(rogue, 'inquisitive-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = rogue.archetypes[1].archetypeName + ', ' + rogue.archetypes[1].archetypeFeatures[0] + ', ' + rogue.archetypes[1].archetypeFeatures[1] + ', ' + rogue.archetypes[1].archetypeFeatures[2];
                classTable.rows[11].cells[2].innerHTML = rogue.archetypes[1].archetypeFeatures[3];
                classTable.rows[15].cells[2].innerHTML = rogue.archetypes[1].archetypeFeatures[4];
                classTable.rows[19].cells[2].innerHTML = rogue.archetypes[1].archetypeFeatures[5];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                rogue.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Roguish Archetype<')){
                        classFeatureDisplay += rogue.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Roguish Archetype Feature<')) {
                        classFeatureDisplay += rogue.archetypes[1].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'psi-assassin-archetype':

                baseClassDisplay(rogue, 'psi-assassin-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = rogue.archetypes[2].archetypeName + ', ' + rogue.archetypes[2].archetypeFeatures[0] + ', ' + rogue.archetypes[2].archetypeFeatures[1] + ', ' + rogue.archetypes[2].archetypeFeatures[2];
                classTable.rows[11].cells[2].innerHTML = rogue.archetypes[2].archetypeFeatures[3];
                classTable.rows[15].cells[2].innerHTML = rogue.archetypes[2].archetypeFeatures[4];
                classTable.rows[19].cells[2].innerHTML = rogue.archetypes[2].archetypeFeatures[5];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                rogue.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Roguish Archetype<')){
                        classFeatureDisplay += rogue.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Roguish Archetype Feature<')) {
                        classFeatureDisplay += rogue.archetypes[2].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;
            case 'scout-archetype':

                baseClassDisplay(rogue, 'scout-archetype');
                //Class Table
                classTable.rows[5].cells[2].innerHTML = rogue.archetypes[3].archetypeName + ', ' + rogue.archetypes[3].archetypeFeatures[0] + ', ' + rogue.archetypes[3].archetypeFeatures[1];
                classTable.rows[11].cells[2].innerHTML = rogue.archetypes[3].archetypeFeatures[2];
                classTable.rows[15].cells[2].innerHTML = rogue.archetypes[3].archetypeFeatures[3];
                classTable.rows[19].cells[2].innerHTML = rogue.archetypes[3].archetypeFeatures[4];
            
            
                //Feature description
                classFeatureDisplay = '';
                featureIndex = 0;
                rogue.featuresDesc.forEach(feature => {
                    classFeatureDisplay += feature;
                    if (feature.includes('>Roguish Archetype<')){
                        classFeatureDisplay += rogue.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                        classFeatureDisplay += rogue.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;

                    }else if (feature.includes('>Roguish Archetype Feature<')) {
                        classFeatureDisplay += rogue.archetypes[3].archetypeFeaturesDesc[featureIndex];
                        featureIndex++;
                    }
                });
                classFeatures.innerHTML = classFeatureDisplay;
                break;

            case null:
                console.log('This is NULL');
                break;
            default:
                console.log('something went wrong -- ' + classSelected);
                break;
        }
  
        var newFilter = document.getElementById(classSelected);
        if(currentFilterClass[0]){
            if(currentFilterClass[0].getAttribute('id') != classSelected){
                currentFilterClass[0].classList.toggle('active');
                newFilter.classList.toggle('active');
            }  
        }else{
            if (newFilter.getAttribute('id').includes('archetype')) {
                let parent = newFilter.parentNode.parentNode;
                parent.classList.toggle('show');
            }
            newFilter.classList.toggle('active');
        }


    }

    var currentClass = sessionStorage.getItem("currentClassDisplay");

    displayClass(currentClass, true);



    classSelection.addEventListener("click", displayClass);

    
}
//CLASSES & ARCHETYPES END

//RACES START
function racePage() {
    var raceSelection = document.getElementById('race-list');
    var raceOptions = raceSelection.getElementsByTagName('a');
    var currentRace = sessionStorage.getItem("currentRace");

    
    function refreshedRaceFilter(filter) {
        var filterToActivate = document.getElementById(filter);
        if (filter != null) {
            var filtered = document.getElementById(filter.slice(0, filter.indexOf('-list')));
            filtered.classList.toggle("show");
            filtered.classList.toggle("active");     
            filterToActivate.classList.toggle("active");   
        }else{
            document.getElementById('cloud-pergashan').classList.toggle("active");
            document.getElementById('cloud-pergashan').classList.toggle("show");
            document.getElementById('cloud-pergashan-list').classList.toggle("active");
        }
      }


    for (let race of raceOptions) {
        race.addEventListener('click', ()=>{
            var selectedFilter = event.target.getAttribute('id');
            sessionStorage.setItem("currentRace", selectedFilter);
        });
    }

    refreshedRaceFilter(currentRace);
      
}
//RACES END

//FEATS START
function featPage() {

    const feats = ['<div class="shadow feat-box rounded  border border-secondary dexterity-filter"><span class="feat-title p-2">Acrobat</span><p>You become more nimble, gaining the following benefits:</p><ul><li>Increase your Dexterity score by 1, to a maximum of 20.</li><li>You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>During your movement, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain does not cost you extra movement until the end of the current turn.</li><li>When Standing from <i>Prone</i>, you have advantage on the roll.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Alert</span><p>Always on the lookout for danger, you gain the following benefits:</p>  <ul><li>You gain a +5 bonus to initiative.</li><li>You can\'t be surprised while you are conscious.</li><li>Other creatures don\'t gain advantage on attack rolls against you as a result of being unseen by you.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter dexterity-filter"><span class="feat-title p-2">Athlete</span><p>You have undergone extensive physical training to gain the following benefits:</p><ul><li>Increase your Strength or Dexterity by 1, to a maximum of 20.</li><li>When you are prone, standing up uses only 5 feet of your movement. Also, attacks made against you when you stand must now defeat your AC by 15 points (rather than 10) in order to keep you from standing.</li><li>Climbing does not cost you extra movement. You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter charisma-filter psionics-filter"><span class="feat-title p-2">Avatar Focused</span><p>You have focused your psionic powers and aligned yourself with the Order of the Avatar.</p><ul><li>Increase your Charisma or Intelligence score by 1, to a maximum of 20.</li><li>When you use an ability that has a Psi Point cost from the Order of the Avatar, you may reduce its cost by 1 point. You have a minimum cost of 1 Psi Point and must still abide by your Psionic Limit for points spent per turn. This feature does not stack with other Psi Point reductions.</li><li>Immediately after you spend Psi Points on a psionic discipline of this order, you can take a bonus action to recoverhit points equal to the number of Psi Points you spent. You must finish a long rest to use this feature again.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter psionics-filter"><span class="feat-title p-2">Awakened Focused</span><p>You have focused your psionic powers and aligned yourself with the Order of the Awakened.</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20. </li><li>When you use an ability that has a Psi Point cost from the Order of the Awakened, you may reduce its cost by 1 point. You have a minimum cost of 1 Psi Point and must still abide by your Psionic Limit for points spent per turn. This feature does not stack with other Psi Point reductions.</li><li>Immediately after you spend Psi Points on a psionic discipline from the Order of the Awakened, you can take a bonus action to recover hit points equal to the number of Psi Points you spent. You must finish a long rest to use this feature again.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter"><span class="feat-title p-2">Brawny</span><p>You become stronger, gaining the following benefits:</p><ul><li>Increase your Strength score by 1, to a maximum of 20.</li><li>You gain proficiency in the Athletics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>You count as if you were one size larger for the purpose of determining your carrying capacity.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Channeler</span><p>You learn a method whereby you can cause a Sundered device (mysteriums or relics) that you carry or that is within 5 feet of you to create either of the following two specific effects as your action. Your Intelligence score is your associated ability. You either Force Onslaught or Mindslice by doing one of the following:</p><ul><li>Burning out a mysterium.</li><li>Rolling for depletion with a relic.</li><li>Spending a Psi Point.</li></ul><p>In all cases, the device’s normal function is suppressed, and one of the two effects described hereafter occurs instead. Some devices—especially those not under their control—might require that the character first succeed on a DC 15 (or higher) Intelligence check as a bonus action. In addition, some devices (particularly ingestibles) cannot be altered in this way.</p><ul><li><b>Force Onslaught:</b> As if making a simple weapon ranged attack, you project a beam of force at a target within 60 feet that you can see. It deals 3d6 force damage.</li><li><b>Mindslice:</b> You focus your mental energy to blast the thought processes of another creature within 60 feet that you can sense. It deals 3d6 psychic damage if the target fails a DC 13 Wisdom saving throw, or half that if they succeed.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Charger</span><p>When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.</p><p>If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack\'s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).</p></div>','<div class="shadow feat-box rounded  border border-secondary psionics-filter"><span class="feat-title p-2">Crystal Bearer</span><p>Your attunement with a particular psionic wavelength has manifested a psi-crystal to sprout from your third eye. You gain the Telepathy talent with a range of 60 feet. If you already have Telepathy, you can connect a number of creatures equal to your Intelligence modifier telepathically to yourself.</p><p>In addition, select one of the following psi-crystal powers and gain its benefits. The saving throw DC is based on your Intelligence score and the abilities do not require Psi Points. Once you use your crystal ability, you must take a short rest to do so again.</p><ul><li><b>Distance (pale blue crystal):</b> Space contorts and twists. As an action, choose any number of targets that you can see within 30 feet of you. Each target that is Large or smaller must succeed on an Intelligence saving throw or be pushed back 30 feet from you.</li><li><b>Levitas (bright rose crystal):</b> You understand that the weave of timescape isn’t a true force—it’s little more than a quirk of geometry that you can adjust. As an action, choose a creature that is up to one size category larger than yourself within 30 feet of you that you can see. The target must succeed on an Intelligence saving throw or become your plaything for 1 minute or until your concentration ends. At the start of each of its turns, the target rises 10 feet. A levitating target can repeat its saving throw at the end of each of its turns, until it saves. When the target eventually hits the ground, it takes 1d6 damage per 10 feet fallen, with a maximum dice equal to the creature’s level (e.g., 5d6 for a CR5 or level 5).</li><li><b>Chasm (opaque black crystal):</b> You infect the mind of a creature with the torturous belief that a chasm is opening beneath it. As an action, target one creature that you can see within 60 feet of you. It must succeed on an Intelligence saving throw or believe that it is falling down an endless chasm. The creature takes 1d8 psychic damage, and if it is no more than one size larger than you, it also falls prone. This belief persists for a number of rounds equal to twice your Intelligence modifier (minimum 1). At the start of each of its turns, the target makes an intelligence saving throw. On a failed save, it continues feeling as though it is falling into an infinite abyss, taking 1d8 psychic damage. This effect fails if the target is immune to charm.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter psionics-filter"><span class="feat-title p-2">Disciplined Mind</span><p>You have untapped a spring of psionic power within yourself. You gain the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You learn one Psionic Discipline.</li><li>Once a day, you can recover your Intelligence modifier in Psi Points when you take a short rest.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Dual Wielder</span><p>You master fighting with two weapons, gaining the following benefits:</p><ul><li>You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.</li><li>You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren\'t light.</li><li>You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary constitution-filter"><span class="feat-title p-2">Durable</span><p>Hardy and resilient, you gain the following benefits:</p><ul><li>Increase your Constitution score by 1, to a maximum of 20.</li><li>When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).</li><li>You can expend a Hit Die to ignore one level of exhaustion until you take a Long Rest.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary wisdom-filter"><span class="feat-title p-2">Efficient</span><p>You approach adventuring with an uncanny precision. You gain the following benefits:</p><ul><li>Increase your Wisdom score by 1, to a maximum of 20.</li><li>When camping, you may perform one additional camp activity and still gain the benefits of properly resting.</li><li>You know how to pack smart. Gain inventory slots equal to your Wisdom modifier.</li><li>Once per long rest, you may reroll one Wisdom ability or skill check. You must take the second result.li></ul></div>','<div class="shadow feat-box rounded  border border-secondary psionics-filter"><span class="feat-title p-2">Energized</span><p>Your body and mind are brimming with psionic energy. You gain Psi Points equal to your proficiency bonus and they scale with it. Your Psi Limit also increases by 1.</p></div>','<div class="shadow feat-box rounded  border border-secondary dexterity-filter intelligence-filter psionics-filter"><span class="feat-title p-2">Far Hand Focused</span><p>You have focused your psionic powers and aligned yourself with the Order of the Far Hand.• Increase your Dexterity or Intelligence score by 1, to a maximum of 20.</p><ul><li>When you use an ability that has a Psi Point cost from the Order of the Far Hand, you may reduce its cost by 1 point. You have a minimum cost of 1 Psi Point and must still abide by your Psionic Limit for points spent per turn. This feature does not stack with other Psi Point reductions.</li><li>Immediately after you spend Psi Points on a psionic discipline from the Order of the Far Hand, you can take a bonus action to recover hit points equal to the number of Psi Points you spent. You must finish a long rest to use this feature again.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Healing Hands</span><p>You are an able healer and can mend wounds quickly to help your allies get back into the fray. You gain the following benefits:</p><ul><li>When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point.</li><li>You can help up to five allies (including yourself) during a breather by adding a minor herbal refresher to water. Anyone using a water ration during the breather can recover your proficiency modifier in hit points in addition to the regular healing permitted.</li><li>You can use a healer’s kit to help up to five allies (and yourself) during a long rest. Anyone using Hit Die to recover during the long rest can reroll any 1’s or 2’s on their Hit Die.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter"><span class="feat-title p-2">Heavily Armored<span class="feat-prerequisites">Prerequisites: Proficiency with medium armor</span></span><p>You have trained to master the use of heavy armor, gaining the following benefits:</p><ul><li>Increase your Strength score by 1, to a maximum of 20.</li><li>You gain proficiency with heavy armor.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter constitution-filter psionics-filter"><span class="feat-title p-2">Immortal Focused</span><p>You have focused your psionic powers and aligned yourself with the Order of the Immortal.</p><ul><li>Increase your Strength or Constitution score by 1, to a maximum of 20.</li><li>When you use an ability that has a Psi Point cost from the Order of the Immortal, you may reduce its cost by 1 point. You have a minimum cost of 1 Psi Point and must still abide by your Psionic Limit for points spent per turn. This feature does not stack with other Psi Point reductions.</li><li>Immediately after you spend Psi Points on a psionic discipline from the Order of the Immortal, you can take a bonus action to recover hit points equal to the number of Psi Points you spent. You must finish a long rest to use this feature again.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Inspiring Leader<span class="feat-prerequisites">Prerequisites: Charisma 13 or higher</span></span><p>You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can\'t gain temporary hit points from this feat again until it has finished a short or long rest.</p></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter"><span class="feat-title p-2">Keen Mind</span><p>You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You always know which way is north.</li><li>You always know the number of hours left before the next sunrise or sunset.</li><li>You can accurately recall anything you have seen or heard within the past month.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Martial Adept</span><p>You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:</p><ul><li>You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver\'s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).</li><li>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Medium Armor Master<span class="feat-prerequisites">Prerequisites: Proficiency with medium armor</span></span><p>You have practiced moving in medium armor to gain the following benefits:</p><ul><li>Wearing medium armor doesn\'t impose disadvantage on your Dexterity (Stealth) checks.</li><li>When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Mobile</span><p>You are exceptionally speedy and agile. You gain the following benefits:</p><ul><li>Your speed increases by 10 feet.</li><li>When you use the Dash action, difficult terrain doesn\'t cost you extra movement on that turn.</li><li>When you make a melee attack against a creature, you don\'t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter dexterity-filter"><span class="feat-title p-2">Moderately Armored<span class="feat-prerequisites">Prerequisites: Proficiency with light armor</span></span><p>You have trained to master the use of medium armor and shields, gaining the following benefits:</p><ul><li>Increase your Strength or Dexterity by 1, to a maximum of 20.</li><li>You gain proficiency with medium armor and shields.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary "><span class="feat-title p-2">Mounted Combatant</span><p>You are a dangerous foe to face while mounted. While you are mounted and aren\'t incapacitated, you gain the following benefits:</p><ul><li>You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.</li><li>You can force an attack targeted at your mount to target you instead.</li><li>If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Mysterium Adept</span><p>You have learned a little something about mysteriums and have gained some additional facility with their use. You gain the following benefits:</p><ul><li>You can bear one additional mysterium beyond the standard limit of three, and thus carry a total of four mysteriums before risking a roll on the Mysterium Danger Table.</li><li>When you use a mysterium, you can try to use it in such a fashion that it doesn’t burn out, though doing so is dangerous. When you use a mysterium in this fashion, roll 1d20. On a roll of 10 or higher, you succeed, and the cypher remains available to be used again. Otherwise you fail, and the cypher burns out as normal. In addition to burning out, it detonates and deals half psychic and half force damage to you (no save to avoid the damage) according to the mysterium’s rarity: common 9 (2d8); uncommon 18 (4d8); rare 27 (6d8); very rare 36 (8d8).</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter wisdom-filter psionics-filter"><span class="feat-title p-2">Nomad Focused</span><p>You have focused your psionic powers and aligned yourself with the Order of the Nomad.</p><ul><li>Increase your Intelligence or Wisdom score by 1, to a maximum of 20.</li><li>When you use an ability that has a Psi Point cost from the Order of the Nomad, you may reduce its cost by 1 point. You have a minimum cost of 1 Psi Point and must still abide by your Psionic Limit for points spent per turn. This feature does not stack with other Psi Point reductions.</li><li>Immediately after you spend Psi Points on a psionic discipline from the Order of the Nomad, you can take a bonus action to recover hit points equal to the number of Psi Points you spent. You must finish a long rest to use this feature again.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter wisdom-filter"><span class="feat-title p-2">Observant</span><p>Quick to notice details of your environment, you gain the following benefits:</p><ul><li>Increase your Intelligence or Wisdom by 1, to a maximum of 20.</li><li>If you can see a creature\'s mouth while it is speaking a language you understand, you can interpret what it\'s saying by reading its lips.</li><li>You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Polearm Master</span><p>You can keep your enemies at bay with reach weapons. You gain the following benefits:</p><ul><li>When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon\'s damage die for this attack is a d4, and the attack deals bludgeoning damage.</li><li>While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter your reach.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter"><span class="feat-title p-2">Polyglot</span><p>You know the importance of communication and have a knack for picking up new languages. You gain the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You gain three proficiency points to apply towards language. One point gains speech and comprehension of a new language. If you have sufficient materials or means, you can spend one point towards literacy of a language you know. You may also save these proficiency points to use towards literacy in a language when you do acquire the necessary materials.</li><li>When trying to communicate with a creature that speaks a different language than you, you have advantage on Wisdom (Insight) and Charisma (Persuasion and Intimidation) checks.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary intelligence-filter psionics-filter"><span class="feat-title p-2">Psionic Master</span><p>Rather than be satisfied with your natural affinity to psionics, you’ve spent time in focused training. You gain the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You know one additional Psionic Talent.</li><li>You may add your Intelligence modifier to any damage you do with a Psionic Talent (minimum 1). If you already havethis capability, you deal 1 additional damage with a Psionic Talent.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Savage Attacker</span><p>Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon\'s damage dice and use either total.</p></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Sentinel</span><p>You have mastered techniques to take advantage of every drop in any enemy\'s guard, gaining the following benefits:</p><ul><li>When you hit a creature up to two size categories larger than yourself (maximum Huge) with an opportunity attack, the creature\'s speed becomes 0 for the rest of the turn.</li><li>Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.</li><li>When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn\'t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Sharpshooter</span><p>You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:</p><ul><li>Attacking at long range doesn\'t impose disadvantage on your ranged weapon attack rolls.</li><li>Your ranged weapon attacks ignore half cover and three-quarters cover.</li><li>Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack\'s damage.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Shield Master</span><p>You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield:</p><ul><li>If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.</li><li>If you aren\'t incapacitated, you can add your shield\'s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.</li><li>If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary charisma-filter"><span class="feat-title p-2">Skald</span><p>Your excellent memory for historical tales and flair in storytelling rewards you with the following benefits:</p><ul><li>Increase your Charisma score by 1, to a maximum of 20.</li><li>You gain proficiency in the Performance skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>When you spend at least 1 minute telling a tale by doing a Charisma (Performance) skill check, you can grant a bonus to an ability check up to your proficiency bonus. You need to meet a DC of 15 minimum to grant a +1 bonus. The bonus applies to one specific ability check but can affect multiple creatures if they listened to the tale. Creatures must be able to understand you, speak the same language, and not have an Intelligence score less than 10. This bonus must be used within one hour or it is lost. For every 5 points above the base DC you achieve grants an additional +1 to the bonus, with a maximum of your total proficiency bonus. Rolling a critical success (natural 20) grants your full proficiency bonus and a critical failure (natural 1) means that your tale falls flat and grants no bonus. A creature can only listen to a tale for a particular skill once a day whether it is a failed or successful one.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Skulker<span class="feat-prerequisites">Prerequisites: Dexterity 13 or higher</span></span><p>You are expert at slinking through shadows. You gain the following benefits:</p><ul><li>You can try to hide when you are lightly obscured from the creature from which you are hiding.</li><li>When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn\'t reveal your position.</li><li>Dim light doesn\'t impose disadvantage on your Wisdom (Perception) checks relying on sight.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary strength-filter constitution-filter"><span class="feat-title p-2">Tavern Brawler</span><p>Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:</p><ul><li>Increase your Strength or Constitution by 1, to a maximum of 20.</li><li>You are proficient with improvised weapons.</li><li>Your unarmed strike uses a d4 for damage.</li><li>When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.</li></ul></div>','<div class="shadow feat-box rounded  border border-secondary"><span class="feat-title p-2">Tough<br></span><p>Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.</p></div>'];

    let featText;
    var featList = document.getElementById('feat-list');
    var featFilters = featList.getElementsByTagName('a');
    var featSection = document.getElementById('feat-display-section');

    var currentFeatFilter = sessionStorage.getItem("currentFeatFilter");
    
    function refreshedFeatFilter(filter) {
        var filterToActivate = document.getElementById(filter);
        if (filter != null) {
            filterToActivate.classList.toggle("active");   
        }else{
            document.getElementById('all-filter').classList.toggle("active");
        }   
      } 

      var displayFeats = function(filter = 'all-filter', refreshed = false) {
        featText = '';
        var featsToDisplay;
        if (!refreshed) {
            featsToDisplay =  event.target.getAttribute('id');           
        }else{
            featsToDisplay = filter;
        }
         
        if (!featsToDisplay || featsToDisplay == null) {
            featsToDisplay = 'all-filter'
        }
        if(refreshed){
            refreshedFeatFilter(featsToDisplay);
        }
        
        sessionStorage.setItem("currentFeatFilter", featsToDisplay);


        if (featsToDisplay == 'all-filter') {
            feats.forEach(feat =>{
                featText += feat;
            }) 
        } else {
            feats.forEach(feat =>{
                if (feat.includes(featsToDisplay)) {
                    featText += feat;
                }
            })
        }     
        featSection.innerHTML = featText;
    }

    for (let tag of featFilters) {
        tag.addEventListener("click", displayFeats);
    }

    displayFeats(currentFeatFilter, true);
}
//FEATS END

//TRAINING START
function trainingPage() {

    // const training = [];
    // let featText;
    // var featList = document.getElementById('feat-list');
    // var featFilters = featList.getElementsByTagName('a');
    // var featSection = document.getElementById('feat-display-section');

    // var currentFeatFilter = sessionStorage.getItem("currentFeatFilter");
    
    // function refreshedFeatFilter(filter) {
    //     var filterToActivate = document.getElementById(filter);
    //     if (filter != null) {
    //         filterToActivate.classList.toggle("active");   
    //     }else{
    //         document.getElementById('all-filter').classList.toggle("active");
    //     }   
    //   } 

    //   var displayFeats = function(filter = 'all-filter', refreshed = false) {
    //     featText = '';
    //     var featsToDisplay;
    //     if (!refreshed) {
    //         featsToDisplay =  event.target.getAttribute('id');           
    //     }else{
    //         featsToDisplay = filter;
    //     }
         
    //     if (!featsToDisplay || featsToDisplay == null) {
    //         featsToDisplay = 'all-filter'
    //     }
    //     if(refreshed){
    //         refreshedFeatFilter(featsToDisplay);
    //     }
        
    //     sessionStorage.setItem("currentFeatFilter", featsToDisplay);


    //     if (featsToDisplay == 'all-filter') {
    //         feats.forEach(feat =>{
    //             featText += feat;
    //         }) 
    //     } else {
    //         feats.forEach(feat =>{
    //             if (feat.includes(featsToDisplay)) {
    //                 featText += feat;
    //             }
    //         })
    //     }     
    //     featSection.innerHTML = featText;
    // }

    // for (let tag of featFilters) {
    //     tag.addEventListener("click", displayFeats);
    // }

    // displayFeats(currentFeatFilter, true);
}
//TRAINING END

//PSIONICS START
function psionicsPage(){
    var psionicsFilterList = document.getElementById('psionics-list');
    var psionicsBoxes = document.getElementsByClassName('psionics-box');

    // function collapsibleBox(box){
    //     let boxBody = box.parentNode.children[1];
    //     if (boxBody.style.display == 'none') {
    //       boxBody.style.display = 'block';
    //     } else {
    //       boxBody.style.display = 'none';
    //     }
    //   }

    function psionicFilter(){
        let filter = event.target.getAttribute('id');
        let title = event.target.innerText;
        document.getElementById('psionic-display-title').innerText = title;
        for (const box of psionicsBoxes) {
            box.children[1].style.display = 'none';
            if(filter != 'all-filter'){
                if (box.getAttribute('class').includes(filter)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            }else{
                box.style.display = "block";
            }
            
        };
        
    }

    psionicsFilterList.addEventListener('click',psionicFilter);


}
//PSIONICS END

//ITEMS START
function itemsPage(){
    var items = [];

    let itemDisplay = document.getElementById('itemDisplay');

    let itemType = document.getElementById('itemType');
    let itemName = document.getElementById('itemName');
    let itemSlots = document.getElementById('itemSlots');
    let itemSave = document.getElementById('itemSave');

    itemSave.addEventListener('click', (e) => {
        let item = {
            type: itemType.value,
            name: itemName.value,
            slots: itemSlots.value
        }
        items.push(item);

        itemDisplay.innerText = items;
    });

}
//ITEMS END

//LOCATIONS START

//LOCATIONS END

//NPCS START

//NPCS END

//GLYPHS START

//GLYPHS END

//RULES START

//RULES END
