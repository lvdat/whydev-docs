---
title: Levelled Mobs
---
## Level của quái vật trong server khi càng xa toạ độ x = 0, z = 0 thì sẽ càng lớn


## Level của quái vật trong server khi tung độ càng cao càng thấp tính từ y = 0


## Quái trong server có thể lên đến tối đa 150 level


## Các chỉ số của quái được tính theo công thức sau:

        max-health: '(%level-ratio% * %max-health% * 7)'

        movement-speed: '(%level-ratio% * %movement-speed% * 0.5)'

        attack-damage: '(%level-ratio% * %attack-damage% * 7.5)'

        ranged-attack-damage: '(%level-ratio% * %ranged-attack-damage% * 5)'

        creeper-blast-damage: '(%level-ratio% * %creeper-blast-damage% * 15)'

        follow-range: '(%level-ratio% * %follow-range% * 3)'

        item-drop: '(%level-ratio% * %item-drop% * 7.5)'

        xp-drop: '(%level-ratio% * %xp-drop% * 12.5)'

        # Special Multipliers (0.0 Min - 1.0 Max)

        armor-bonus: '(%level-ratio% * (5 - %armor-bonus%))'

        armor-toughness: '(%level-ratio% * (3 - %armor-toughness%))'

        attack-knockback: '(%level-ratio% * (2.5 - %attack-knockback%))'

        knockback-resistance: '(%level-ratio% * (0.25 - %knockback-resistance%))'

        zombie-spawn-reinforcements: '(%level-ratio% * (0.5 - %zombie-spawn-reinforcements%))'

