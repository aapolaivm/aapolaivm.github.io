<script>
	import TreeView from './TreeView.svelte'

	const tree = {
		label: "Verolait", children: [
			{label: "Laki elinkeinotulon verottamisesta (1968/360)", children: [
				{label: "I osa", children: [
                    {label: "Joku"},
                ]},
                {label: "II osa", children: [
                    {label: "Joku"},
                ]},
                {label: "III osa", children: [
                    {label: "Joku"},
                ]},
                {label: "IV osa", children: [
                    {label: "50-51 g §", children: [
                        {label: " §"},
                    ]},
                    {label: "52-52 i § (yritysjärjestelysäännökset)", children: [
                        {label: "52 §"},
                        {label: "52 a §"},
                        {label: "52 b §"},
                        {label: "52 c §"},
                        {label: "52 d §"},
                        {label: "52 e §"},
                        {label: "52 f §"},
                        {label: "52 g §"},
                        {label: "52 h §", children: [
                            {label: "sisällöntuottaja", children: [
                                {label: "Touko"}, //klik --> aukee teksti
                                /*
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                */
                                {label: "Jape"}, 
                                {label: "Tero"},  
                                {label: '<a href="/">link text</a>'},
                            ]}
                        ]},
                        {label: "52 i §"}
                    ]},
                ]},
                {label: "V osa", children: [
                    {label: "Joku"},
                ]},
				{label: "Tänne voi laittaa jotain?"},
			]},
			{label: "Tuloverolaki (1992/1535)", children: [
				{label: "San Francisco"},
				{label: "Los Angeles"},
				{label: "Sacramento"},
			]},
		]
	}
</script>

<h2>Säännöksien merkityssisällöt</h2>

<TreeView {tree} />