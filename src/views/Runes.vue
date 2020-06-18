<template>
	<div>
		<table>
			<thead>
				<tr>
					<th colspan="2"> Rune</th>
					<th align="center"> to Upgrade:</th>
					<th> Socketed Properties</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> <a target="_blank" href="runes/El" title="El">El</a> - #1</td>
					<td class="red"> <a target="_blank" href="runes/El" class="image"><img alt="R-el.gif" :src="`${publicPath}img/runes/28px-El_Rune.png`" width="31" height="34"></a></td>
					<td align="center"> --</td>
					<td> <b>Weapon:</b> +50 AR, +1 Light Radius<br><b>Armor/Helm/Shield:</b> +1 Light Radius, +15 Defense<br><b>Clvl Required:</b> 11</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Eld" title="Eld">Eld</a> - #2</td>
					<td class="red"> <a target="_blank" href="runes/Eld" class="image"><img alt="R-eld.gif" :src="`${publicPath}img/runes/28px-Eld_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="runes/El" class="image"><img alt="R-el.gif" :src="`${publicPath}img/runes/28px-El_Rune.png`" width="31" height="34"></a><a target="_blank" href="runes/El" class="image"><img alt="R-el.gif" :src="`${publicPath}img/runes/28px-El_Rune.png`" width="31" height="34"></a><a target="_blank" href="runes/El" class="image"><img alt="R-el.gif" :src="`${publicPath}img/runes/28px-El_Rune.png`" width="31" height="34"></a></td>
					<td> <b>Weapon:</b> +75% Damage vs. Undead, +50 Attack Rating vs. Undead *<br><b>Armor/Helm:</b> Lowers Stamina drain by 15%<br> <b>Shield:</b> +7% Blocking<br><b>Clvl Required:</b> 11</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Tir" title="Tir">Tir</a> - #3</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Tir_Rune.png" class="image"><img alt="R-tir.gif" :src="`${publicPath}img/runes/28px-Tir_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="runes/Eld" class="image"><img alt="R-eld.gif" :src="`${publicPath}img/runes/28px-Eld_Rune.png`" width="30" height="31"></a><a target="_blank" href="runes/Eld" class="image"><img alt="R-eld.gif" :src="`${publicPath}img/runes/28px-Eld_Rune.png`" width="30" height="31"></a><a target="_blank" href="runes/Eld" class="image"><img alt="R-eld.gif" :src="`${publicPath}img/runes/28px-Eld_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> +2 Mana Per Kill<br><b>Armor/Helm/Shield:</b> +2 Mana Per Kill.<br><b>Clvl Required:</b> 13</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Nef" title="Nef">Nef</a> - #4</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Nef_Rune.png" class="image"><img alt="R-nef.gif" :src="`${publicPath}img/runes/28px-Nef_Rune.png`" width="28" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Tir_Rune.png" class="image"><img alt="R-tir.gif" :src="`${publicPath}img/runes/28px-Tir_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Tir_Rune.png" class="image"><img alt="R-tir.gif" :src="`${publicPath}img/runes/28px-Tir_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Tir_Rune.png" class="image"><img alt="R-tir.gif" :src="`${publicPath}img/runes/28px-Tir_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> Knockback<br><b>Armor/Helm/Shield:</b> +30 Defense vs. Missile<br><b>Clvl Required:</b> 13</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Eth" title="Eth">Eth</a> - #5</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Eth_Rune.png" class="image"><img alt="R-eth.gif" :src="`${publicPath}img/runes/28px-Eth_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Nef_Rune.png" class="image"><img alt="R-nef.gif" :src="`${publicPath}img/runes/28px-Nef_Rune.png`" width="28" height="31"></a><a target="_blank" href="img/runes/File:28px-Nef_Rune.png" class="image"><img alt="R-nef.gif" :src="`${publicPath}img/runes/28px-Nef_Rune.png`" width="28" height="31"></a><a target="_blank" href="img/runes/File:28px-Nef_Rune.png" class="image"><img alt="R-nef.gif" :src="`${publicPath}img/runes/28px-Nef_Rune.png`" width="28" height="31"></a></td>
					<td> <b>Weapon:</b> -25% Target Defense<br><b>Armor/Helm/Shield:</b> Regenerate Mana 15%<br><b>Clvl Required:</b> 15</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ith" title="Ith">Ith</a> - #6</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ith_Rune.png" class="image"><img alt="R-ith.gif" :src="`${publicPath}img/runes/28px-Ith_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Eth_Rune.png" class="image"><img alt="R-eth.gif" :src="`${publicPath}img/runes/28px-Eth_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Eth_Rune.png" class="image"><img alt="R-eth.gif" :src="`${publicPath}img/runes/28px-Eth_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Eth_Rune.png" class="image"><img alt="R-eth.gif" :src="`${publicPath}img/runes/28px-Eth_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> +9 to Maximum Damage<br><b>Armor/Helm/Shield:</b> 15% Damage Taken Goes to Mana<br><b>Clvl Required:</b> 15</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Tal" title="Tal">Tal</a> - #7</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Tal_Rune.png" class="image"><img alt="R-tal.gif" :src="`${publicPath}img/runes/28px-Tal_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ith_Rune.png" class="image"><img alt="R-ith.gif" :src="`${publicPath}img/runes/28px-Ith_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Ith_Rune.png" class="image"><img alt="R-ith.gif" :src="`${publicPath}img/runes/28px-Ith_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Ith_Rune.png" class="image"><img alt="R-ith.gif" :src="`${publicPath}img/runes/28px-Ith_Rune.png`" width="29" height="30"></a></td>
					<td> <b>Weapon:</b> 75 Poison damage over 5 seconds<br><b>Armor/Helm/Shield:</b> +35% Poison Resistance<br><b>Clvl Required:</b> 17</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ral" title="Ral">Ral</a> - #8</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ral_Rune.png" class="image"><img alt="R-ral.gif" :src="`${publicPath}img/runes/28px-Ral_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Tal_Rune.png" class="image"><img alt="R-tal.gif" :src="`${publicPath}img/runes/28px-Tal_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Tal_Rune.png" class="image"><img alt="R-tal.gif" :src="`${publicPath}img/runes/28px-Tal_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Tal_Rune.png" class="image"><img alt="R-tal.gif" :src="`${publicPath}img/runes/28px-Tal_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> +5-30 Fire Damage<br><b>Armor/Helm/Shield:</b> +35% Fire Resistance<br><b>Clvl Required:</b> 19</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ort" title="Ort">Ort</a> - #9</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ort_Rune.png" class="image"><img alt="R-ort.gif" :src="`${publicPath}img/runes/28px-Ort_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ral_Rune.png" class="image"><img alt="R-ral.gif" :src="`${publicPath}img/runes/28px-Ral_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Ral_Rune.png" class="image"><img alt="R-ral.gif" :src="`${publicPath}img/runes/28px-Ral_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Ral_Rune.png" class="image"><img alt="R-ral.gif" :src="`${publicPath}img/runes/28px-Ral_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> +1-50 Lightning Damage<br><b>Armor/Helm/Shield:</b> +35% Lightning Resistance<br><b>Clvl Required:</b> 21</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Thul" title="Thul">Thul</a> - #10</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Thul_Rune.png" class="image"><img alt="R-thul.gif" :src="`${publicPath}img/runes/28px-Thul_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ort_Rune.png" class="image"><img alt="R-ort.gif" :src="`${publicPath}img/runes/28px-Ort_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Ort_Rune.png" class="image"><img alt="R-ort.gif" :src="`${publicPath}img/runes/28px-Ort_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Ort_Rune.png" class="image"><img alt="R-ort.gif" :src="`${publicPath}img/runes/28px-Ort_Rune.png`" width="30" height="31"></a></td>
					<td> <b>Weapon:</b> +3-14 Cold Damage (Cold Length 3 seconds)<br><b>Armor/Helm/Shield:</b> +35% Cold Resistance<br><b>Clvl Required:</b> 23</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Amn" title="Amn">Amn</a> - #11</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Amn_Rune.png" class="image"><img alt="R-amn.gif" :src="`${publicPath}img/runes/28px-Amn_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Thul_Rune.png" class="image"><img alt="R-thul.gif" :src="`${publicPath}img/runes/28px-Thul_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Thul_Rune.png" class="image"><img alt="R-thul.gif" :src="`${publicPath}img/runes/28px-Thul_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Thul_Rune.png" class="image"><img alt="R-thul.gif" :src="`${publicPath}img/runes/28px-Thul_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Chipped_Topaz_(Diablo_II).gif" class="image"><img alt="Topaz-chipped.gif" src="img/runes/Chipped_Topaz_(Diablo_II).gif" width="16" height="16"></a></td>
					<td> <b>Weapon:</b> 7% Life Stolen Per Hit<br><b>Armor/Helm/Shield:</b> Attacker takes 14 damage<br><b>Clvl Required:</b> 25</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Sol" title="Sol">Sol</a> - #12</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Sol_Rune.png" class="image"><img alt="R-sol.gif" :src="`${publicPath}img/runes/28px-Sol_Rune.png`" width="28" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Amn_Rune.png" class="image"><img alt="R-amn.gif" :src="`${publicPath}img/runes/28px-Amn_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Amn_Rune.png" class="image"><img alt="R-amn.gif" :src="`${publicPath}img/runes/28px-Amn_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Amn_Rune.png" class="image"><img alt="R-amn.gif" :src="`${publicPath}img/runes/28px-Amn_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Chipped_Amethyst_(Diablo_II).gif" class="image"><img alt="Amethyst-chipped.gif" src="img/runes/Chipped_Amethyst_(Diablo_II).gif" width="22" height="28"></a></td>
					<td> <b>Weapon:</b> +9 to Minimum Damage<br><b>Armor/Helm/Shield:</b> -7 Damage Taken<br><b>Clvl Required:</b> 27</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Shael" title="Shael">Shael</a> - #13</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Shael_Rune.png" class="image"><img alt="R-shae.gif" :src="`${publicPath}img/runes/28px-Shael_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Sol_Rune.png" class="image"><img alt="R-sol.gif" :src="`${publicPath}img/runes/28px-Sol_Rune.png`" width="28" height="31"></a><a target="_blank" href="img/runes/File:28px-Sol_Rune.png" class="image"><img alt="R-sol.gif" :src="`${publicPath}img/runes/28px-Sol_Rune.png`" width="28" height="31"></a><a target="_blank" href="img/runes/File:28px-Sol_Rune.png" class="image"><img alt="R-sol.gif" :src="`${publicPath}img/runes/28px-Sol_Rune.png`" width="28" height="31"></a><a target="_blank" href="img/runes/Chipped_Sapphire_(Diablo_II).gif" class="image"><img alt="Sapphire-chipped.gif" src="img/runes/Chipped_Sapphire_(Diablo_II).gif" width="15" height="16"></a></td>
					<td> <b>Weapon:</b> Faster Attack Rate (+20)<br><b>Armor/Helm:</b> Faster Hit Recovery (+20)<br><b>Shields:</b> Faster Block Rate (+20)<br><b>Clvl Required:</b> 29</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Dol" title="Dol">Dol</a> - #14</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Dol_Rune.png" class="image"><img alt="R-dol.gif" :src="`${publicPath}img/runes/28px-Dol_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Shael_Rune.png" class="image"><img alt="R-shae.gif" :src="`${publicPath}img/runes/28px-Shael_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Shael_Rune.png" class="image"><img alt="R-shae.gif" :src="`${publicPath}img/runes/28px-Shael_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Shael_Rune.png" class="image"><img alt="R-shae.gif" :src="`${publicPath}img/runes/28px-Shael_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Chipped_Ruby_(Diablo_II).gif" class="image"><img alt="Ruby-chipped.gif" src="img/runes/Chipped_Ruby_(Diablo_II).gif" width="19" height="16"></a></td>
					<td> <b>Weapon:</b> 25% Chance that Hit Causes Monster to Flee<br><b>Armor/Helm/Shield:</b> +7 Replenish Life<br><b>Clvl Required:</b> 31</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Hel" title="Hel">Hel</a> - #15</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Hel_Rune.png" class="image"><img alt="R-hel.gif" :src="`${publicPath}img/runes/28px-Hel_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Dol_Rune.png" class="image"><img alt="R-dol.gif" :src="`${publicPath}img/runes/28px-Dol_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Dol_Rune.png" class="image"><img alt="R-dol.gif" :src="`${publicPath}img/runes/28px-Dol_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Dol_Rune.png" class="image"><img alt="R-dol.gif" :src="`${publicPath}img/runes/28px-Dol_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Chipped_Emerald_(Diablo_II).gif" class="image"><img alt="Emerald-chipped.gif" src="img/runes/Chipped_Emerald_(Diablo_II).gif" width="22" height="22"></a></td>
					<td> <b>Weapon:</b> -20% Requirements<br><b>Armor/Helm/Shield:</b> -15% Requirements<br> <b>Ilvl:</b> 33 <b>Clvl Required:</b> None</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Io" title="Io">Io</a> #16</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Io_Rune.png" class="image"><img alt="R-io po.gif" :src="`${publicPath}img/runes/28px-Io_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Hel_Rune.png" class="image"><img alt="R-hel.gif" :src="`${publicPath}img/runes/28px-Hel_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Hel_Rune.png" class="image"><img alt="R-hel.gif" :src="`${publicPath}img/runes/28px-Hel_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Hel_Rune.png" class="image"><img alt="R-hel.gif" :src="`${publicPath}img/runes/28px-Hel_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Chipped_Diamond_(Diablo_II).gif" class="image"><img alt="Diamond-chipped.gif" src="img/runes/Chipped_Diamond_(Diablo_II).gif" width="17" height="15"></a></td>
					<td> <b>Weapon:</b> +10 Vitality<br><b>Armor/Helm/Shield:</b> +10 Vitality<br><b>Clvl Required:</b> 35</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Lum" title="Lum">Lum</a> - #17</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Lum_Rune.png" class="image"><img alt="R-lum.gif" :src="`${publicPath}img/runes/28px-Lum_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Io_Rune.png" class="image"><img alt="R-io po.gif" :src="`${publicPath}img/runes/28px-Io_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Io_Rune.png" class="image"><img alt="R-io po.gif" :src="`${publicPath}img/runes/28px-Io_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Io_Rune.png" class="image"><img alt="R-io po.gif" :src="`${publicPath}img/runes/28px-Io_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawed_Topaz_(Diablo_II).gif" class="image"><img alt="Topaz-flawed.gif" src="img/runes/Flawed_Topaz_(Diablo_II).gif" width="19" height="21"></a></td>
					<td> <b>Weapon:</b> +10 Energy<br><b>Armor/Helm/Shield:</b> +10 Energy<br><b>Clvl Required:</b> 37</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ko" title="Ko">Ko</a> - #18</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ko_Rune.png" class="image"><img alt="R-ko.gif" :src="`${publicPath}img/runes/28px-Ko_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Lum_Rune.png" class="image"><img alt="R-lum.gif" :src="`${publicPath}img/runes/28px-Lum_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Lum_Rune.png" class="image"><img alt="R-lum.gif" :src="`${publicPath}img/runes/28px-Lum_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Lum_Rune.png" class="image"><img alt="R-lum.gif" :src="`${publicPath}img/runes/28px-Lum_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawed_Amethyst_(Diablo_II).gif" class="image"><img alt="Amethyst-flawed.gif" src="img/runes/Flawed_Amethyst_(Diablo_II).gif" width="17" height="20"></a></td>
					<td> <b>Weapon:</b> +10 Dexterity<br><b>Armor/Helm/Shield:</b> +10 Dexterity<br><b>Clvl Required:</b> 39</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Fal" title="Fal">Fal</a> - #19</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Fal_Rune.png" class="image"><img alt="R-fal.gif" :src="`${publicPath}img/runes/28px-Fal_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ko_Rune.png" class="image"><img alt="R-ko.gif" :src="`${publicPath}img/runes/28px-Ko_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Ko_Rune.png" class="image"><img alt="R-ko.gif" :src="`${publicPath}img/runes/28px-Ko_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Ko_Rune.png" class="image"><img alt="R-ko.gif" :src="`${publicPath}img/runes/28px-Ko_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Flawed_Sapphire_(Diablo_II).gif" class="image"><img alt="Sapphire-flawed.gif" src="img/runes/Flawed_Sapphire_(Diablo_II).gif" width="16" height="18"></a></td>
					<td> <b>Weapon:</b> +10 Strength<br><b>Armor/Helm/Shield:</b> +10 Strength<br><b>Clvl Required:</b> 41</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Lem" title="Lem">Lem</a> - #20</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Lem_Rune.png" class="image"><img alt="R-lem.gif" :src="`${publicPath}img/runes/28px-Lem_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Fal_Rune.png" class="image"><img alt="R-fal.gif" :src="`${publicPath}img/runes/28px-Fal_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Fal_Rune.png" class="image"><img alt="R-fal.gif" :src="`${publicPath}img/runes/28px-Fal_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Fal_Rune.png" class="image"><img alt="R-fal.gif" :src="`${publicPath}img/runes/28px-Fal_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Flawed_Ruby_(Diablo_II).gif" class="image"><img alt="Ruby-flawed.gif" src="img/runes/Flawed_Ruby_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> +75% Extra Gold from Monsters<br><b>Armor/Helm/Shield:</b> +50% Extra Gold from Monsters<br><b>Clvl Required:</b> 43</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Pul" title="Pul">Pul</a> - #21</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Pul_Rune.png" class="image"><img alt="R-pul.gif" :src="`${publicPath}img/runes/28px-Pul_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Lem_Rune.png" class="image"><img alt="R-lem.gif" :src="`${publicPath}img/runes/28px-Lem_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Lem_Rune.png" class="image"><img alt="R-lem.gif" :src="`${publicPath}img/runes/28px-Lem_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Lem_Rune.png" class="image"><img alt="R-lem.gif" :src="`${publicPath}img/runes/28px-Lem_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawed_Emerald_(Diablo_II).gif" class="image"><img alt="Emerald-flawed.gif" src="img/runes/Flawed_Emerald_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> +75% Damage to Demons, +100 AR against Demons<br><b>Armor/Helm/Shield:</b>+30% Defense<br><b>Clvl Required:</b> 45</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Um" title="Um">Um</a> - #22</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Um_Rune.png" class="image"><img alt="R-um.gif" :src="`${publicPath}img/runes/28px-Um_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Pul_Rune.png" class="image"><img alt="R-pul.gif" :src="`${publicPath}img/runes/28px-Pul_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Pul_Rune.png" class="image"><img alt="R-pul.gif" :src="`${publicPath}img/runes/28px-Pul_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawed_Diamond_(Diablo_II).gif" class="image"><img alt="Diamond-flawed.gif" src="img/runes/Flawed_Diamond_(Diablo_II).gif" width="19" height="18"></a></td>
					<td> <b>Weapon:</b> 25% Chance of Open Wounds<br><b>Armor/Helm:</b> +15% Resist All<br><b>Shields:</b> +22% Resist All<br><b>Clvl Required:</b> 47</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Mal" title="Mal">Mal</a> - #23</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Mal_Rune.png" class="image"><img alt="R-mal.gif" :src="`${publicPath}img/runes/28px-Mal_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Um_Rune.png" class="image"><img alt="R-um.gif" :src="`${publicPath}img/runes/28px-Um_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Um_Rune.png" class="image"><img alt="R-um.gif" :src="`${publicPath}img/runes/28px-Um_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Topaz_(Diablo_II).gif" class="image"><img alt="Topaz-normal.gif" src="img/runes/Topaz_(Diablo_II).gif" width="19" height="22"></a></td>
					<td> <b>Weapon:</b> Prevent Monster Healing<br><b>Armor/Helm/Shield:</b> Reduce Magic Damage by 7<br><b>Clvl Required:</b> 49</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ist" title="Ist">Ist</a> - #24</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ist_Rune.png" class="image"><img alt="R-ist.gif" :src="`${publicPath}img/runes/28px-Ist_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Mal_Rune.png" class="image"><img alt="R-mal.gif" :src="`${publicPath}img/runes/28px-Mal_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Mal_Rune.png" class="image"><img alt="R-mal.gif" :src="`${publicPath}img/runes/28px-Mal_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Amethyst_(Diablo_II).gif" class="image"><img alt="Amethyst-normal.gif" src="img/runes/Amethyst_(Diablo_II).gif" width="18" height="21"></a></td>
					<td> <b>Weapon:</b> +30% Better Chance of Finding Magical Items<br><b>Armor/Helm/Shield:</b> +25% Better Chance of Finding Magical Items<br><b>Clvl Required:</b> 51</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Gul" title="Gul">Gul</a> - #25</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Gul_Rune.png" class="image"><img alt="R-gul.gif" :src="`${publicPath}img/runes/28px-Gul_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ist_Rune.png" class="image"><img alt="R-ist.gif" :src="`${publicPath}img/runes/28px-Ist_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Ist_Rune.png" class="image"><img alt="R-ist.gif" :src="`${publicPath}img/runes/28px-Ist_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Sapphire_(Diablo_II).gif" class="image"><img alt="Sapphire-normal.gif" src="img/runes/Sapphire_(Diablo_II).gif" width="17" height="20"></a></td>
					<td> <b>Weapon:</b> +20% AR<br><b>Armor/Helm/Shield:</b> +5 to Max Resist Poison<br><b>Clvl Required:</b> 53</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Vex" title="Vex">Vex</a> - #26</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Vex_Rune.png" class="image"><img alt="R-vex.gif" :src="`${publicPath}img/runes/28px-Vex_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Gul_Rune.png" class="image"><img alt="R-gul.gif" :src="`${publicPath}img/runes/28px-Gul_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Gul_Rune.png" class="image"><img alt="R-gul.gif" :src="`${publicPath}img/runes/28px-Gul_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Ruby_(Diablo_II).gif" class="image"><img alt="Ruby-normal.gif" src="img/runes/Ruby_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> 7% Mana Leech<br><b>Armor/Helm/Shield:</b> +5 to Max Fire Resist<br><b>Clvl Required:</b> 55</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ohm" title="Ohm">Ohm</a> - #27</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ohm_Rune.png" class="image"><img alt="R-ohm.gif" :src="`${publicPath}img/runes/28px-Ohm_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Vex_Rune.png" class="image"><img alt="R-vex.gif" :src="`${publicPath}img/runes/28px-Vex_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Vex_Rune.png" class="image"><img alt="R-vex.gif" :src="`${publicPath}img/runes/28px-Vex_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Emerald_(Diablo_II).gif" class="image"><img alt="Emerald-normal.gif" src="img/runes/Emerald_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> +50% Damage<br><b>Armor/Helm/Shield:</b> +5 to Max. Resist Cold<br><b>Clvl Required:</b> 57</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Lo" title="Lo">Lo</a> - #28</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Lo_Rune.png" class="image"><img alt="R-lo.gif" :src="`${publicPath}img/runes/28px-Lo_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ohm_Rune.png" class="image"><img alt="R-ohm.gif" :src="`${publicPath}img/runes/28px-Ohm_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Ohm_Rune.png" class="image"><img alt="R-ohm.gif" :src="`${publicPath}img/runes/28px-Ohm_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Diamond_(Diablo_II).gif" class="image"><img alt="Diamond-normal.gif" src="img/runes/Diamond_(Diablo_II).gif" width="20" height="20"></a></td>
					<td> <b>Weapon:</b> 20% Chance of Deadly Strike<br><b>Armor/Helm/Shield:</b> +5 to Max. Resist Lightning<br><b>Clvl Required:</b> 59</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Sur" title="Sur">Sur</a> - #29</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Sur_Rune.png" class="image"><img alt="R-sur.gif" :src="`${publicPath}img/runes/28px-Sur_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Lo_Rune.png" class="image"><img alt="R-lo.gif" :src="`${publicPath}img/runes/28px-Lo_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Lo_Rune.png" class="image"><img alt="R-lo.gif" :src="`${publicPath}img/runes/28px-Lo_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawless_Topaz_(Diablo_II).gif" class="image"><img alt="Topaz-flawless.gif" src="img/runes/Flawless_Topaz_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> 20% Chance of Hit Blinds Target<br><b>Armor/Helm:</b> +5% total Mana<br><b>Shields:</b> +50 Mana<br><b>Clvl Required:</b> 61</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Ber" title="Ber">Ber</a> - #30</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Ber_Rune.png" class="image"><img alt="R-ber.gif" :src="`${publicPath}img/runes/28px-Ber_Rune.png`" width="29" height="34"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Sur_Rune.png" class="image"><img alt="R-sur.gif" :src="`${publicPath}img/runes/28px-Sur_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/File:28px-Sur_Rune.png" class="image"><img alt="R-sur.gif" :src="`${publicPath}img/runes/28px-Sur_Rune.png`" width="30" height="31"></a><a target="_blank" href="img/runes/Flawless_Amethyst_(Diablo_II).gif" class="image"><img alt="Amethyst-flawless.gif" src="img/runes/Flawless_Amethyst_(Diablo_II).gif" width="22" height="22"></a></td>
					<td> <b>Weapon:</b> 20% Chance of Crushing Blow<br><b>Armor/Helm/Shield:</b> Damage Reduced by 8%<br><b>Clvl Required:</b> 63</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Jah" title="Jah">Jah</a> - #31</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Jah_Rune.png" class="image"><img alt="R-jo.gif" :src="`${publicPath}img/runes/28px-Jah_Rune.png`" width="33" height="34"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Ber_Rune.png" class="image"><img alt="R-ber.gif" :src="`${publicPath}img/runes/28px-Ber_Rune.png`" width="29" height="34"></a><a target="_blank" href="img/runes/File:28px-Ber_Rune.png" class="image"><img alt="R-ber.gif" :src="`${publicPath}img/runes/28px-Ber_Rune.png`" width="29" height="34"></a><a target="_blank" href="img/runes/Flawless_Sapphire_(Diablo_II).gif" class="image"><img alt="Sapphire-flawless.gif" src="img/runes/Flawless_Sapphire_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> Ignores Target Defense<br><b>Armor/Helm:</b> +5% of total Hit Points<br><b>Shields:</b> +50 Hit Points<br><b>Clvl Required:</b> 65</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Cham" title="Cham">Cham</a> - #32</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Cham_Rune.png" class="image"><img alt="R-cham.gif" :src="`${publicPath}img/runes/28px-Cham_Rune.png`" width="29" height="30"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Jah_Rune.png" class="image"><img alt="R-jo.gif" :src="`${publicPath}img/runes/28px-Jah_Rune.png`" width="33" height="34"></a><a target="_blank" href="img/runes/File:28px-Jah_Rune.png" class="image"><img alt="R-jo.gif" :src="`${publicPath}img/runes/28px-Jah_Rune.png`" width="33" height="34"></a><a target="_blank" href="img/runes/Flawless_Ruby_(Diablo_II).gif" class="image"><img alt="Ruby-flawless.gif" src="img/runes/Flawless_Ruby_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> 32% Chance of Hit Freezing Target for 3 seconds<br><b>Armor/Helm/Shield:</b> Cannot be Frozen<br><b>Clvl Required:</b> 67</td>
				</tr>
				<tr>
					<td> <a target="_blank" href="runes/Zod" title="Zod">Zod</a> - #33</td>
					<td class="red"> <a target="_blank" href="img/runes/File:28px-Zod_Rune.png" class="image"><img alt="R-zod.gif" :src="`${publicPath}img/runes/28px-Zod_Rune.png`" width="30" height="31"></a></td>
					<td align="center"> <a target="_blank" href="img/runes/File:28px-Cham_Rune.png" class="image"><img alt="R-cham.gif" :src="`${publicPath}img/runes/28px-Cham_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/File:28px-Cham_Rune.png" class="image"><img alt="R-cham.gif" :src="`${publicPath}img/runes/28px-Cham_Rune.png`" width="29" height="30"></a><a target="_blank" href="img/runes/Flawless_Emerald_(Diablo_II).gif" class="image"><img alt="Emerald-flawless.gif" src="img/runes/Flawless_Emerald_(Diablo_II).gif" width="25" height="25"></a></td>
					<td> <b>Weapon:</b> Indestructible<br><b>Armor/Helm/Shield:</b> Indestructible<br><b>Clvl Required:</b> 69</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				publicPath: process.env.BASE_URL
			}
		}
	}
</script>

<style  lang="scss" scoped>
table{
	width: 100%;
	background-color: #2D0606;
	tr>td:nth-child(4){
		text-align: left;
		padding: 8px;
	}
	td{
		background: #1A0303;
		border: 1px solid #4D0B0B;
	}
}
</style>