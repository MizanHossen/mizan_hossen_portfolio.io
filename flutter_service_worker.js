'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "b13e3d4da6d6363c8cf7c9555b903056",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "0902b822bda096c516086de55c251d92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8bbb3776425ee57618042d39e14418d",
".git/logs/refs/heads/main": "63bdad3f575960f3ca1fd74b45d86547",
".git/logs/refs/remotes/origin/main": "c97761c4c9b02204ff6f520ba35ed7a4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/f4b9782747fbcee5c992d887fca58d19580349": "0bece60dc2619f1e9f44e6cc9f900161",
".git/objects/03/567b06c03fe34b1d79f5cb9a090f4d38c3403a": "7f61d4922a1eca903ac28a16553ad790",
".git/objects/03/6a872e0c82297de37e71b8c6fa0099a28f0d92": "18be6f110f755a1b60c83ef096c0b327",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/8e2c40dede6416cb53f2781f7db8346f68a9be": "2181c408bc562430e97286158f1d020a",
".git/objects/05/cc4f22be8065c8476b645d76324578db025aae": "6c8c6b605f12bd3606c4161bc5c79527",
".git/objects/06/04409a8323be64d15c3b1d3742b519b5fbdcaf": "2a30caf073152331f421e66821dc6814",
".git/objects/07/f715a80d742fe4b3c00c98e30e253bff0de0be": "625f6e0cb0858e5c51ed70918d334607",
".git/objects/08/4d4843d23b2801c93454abfa03ff7e6edcc8a0": "2a298d9a814fec45ea76f2129ee1717c",
".git/objects/08/b96869fc8f9ae169faa580284e5b71fd682bc5": "9dece3aa9464c085b80690e7bbc495c9",
".git/objects/0a/a4d28224bf1eeabd525799149f05542459f270": "f2fb4b059a883a7ec4bc2f58bbcf85e4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/e010a27cbe10a9a2c4580ec39b6cdf9d9b7d5d": "d98720b95c883af1dea878f63678ea8e",
".git/objects/0d/0b9a080484ab5dfeb409c3b49a0516a20cc1b7": "c0d0b467ccc3952a622b727e442b9bd8",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/a8795678ee43f3591341e60f95efd7b486dcb4": "ad311707cbdb9003132de99b20f6a6eb",
".git/objects/0d/ac8c502036b3a69aa9539d058f0694c73263e7": "7d54584fba925dd8dae760c1e5da828f",
".git/objects/0d/ae675f579695ddd8949c1f3dac056df258ea47": "ae09f956ea545eebeb08f269a377e849",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/398b2481d1e31124e7a014b487c3d287605988": "cc9ed2b9f445b04ff892285052b9c05e",
".git/objects/10/ac7e9e2e62e08ea3be921091ae680e6155821b": "542a7cee0bc0a6a281dfd225225f9440",
".git/objects/11/560f74e9b6a14fe0dc101d8f31e56a7ce57a8b": "cfa6f43accdb89e0d4eac8f3d129ba08",
".git/objects/11/ef5b54b95c3f8288cf5a1ae3719053d9bbcaca": "abe27403625f4179beb2fe2aa245e467",
".git/objects/12/0ca9438ee51911fb0ca7c368d9c8aeac4d75fd": "f67ace3ed9ab5245ba81ed7653610c67",
".git/objects/12/d6b4c4f519c72fe6fb5d344add58cc622d0a73": "6ad032a01b3b662eee3407ae48ac3d0c",
".git/objects/13/501123ac1d2fd0545b77f483f30d599d9e91bc": "bf16b825e48610c20384cc75d8588694",
".git/objects/13/9d6241c6fd7f7f76858db567ca801f14cfd21b": "1d8df9f2e235425e3c9663e18c094773",
".git/objects/15/7d0c1069b6b4915e6057e44d4f317e28901223": "8598dfbb446f8c491d2cf56cd5b29ea7",
".git/objects/15/d90e30471111fc9db178305c98f662004d0175": "d23ca3c4eff2066421974b87491b63a2",
".git/objects/16/8c42bd889b03029f38ac5df1220ec8616f49f3": "965d85468c92d67bc985ec76f01c36b6",
".git/objects/16/a927e8d866ae59891efc15c2d202265844cb57": "97bd9ef88a8bd968a3887f06c36b7f5b",
".git/objects/19/dbba1f56303d94f1e1d021b7a4985e2aed1f6c": "0d2da1980704eca85eac58b4ab861399",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/401b6046729a1fa44a7f6982b08f41c52877a5": "04ac17c67223457e5630d88eb21d8c80",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/3a39cb157b73a333add2f34305c260382e4a1d": "cf2c21262049e9ba82f65b57a944bdfe",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/70ea30f54e3df79f1b0c8953492a6f5d9fcbd8": "c01d5062dbb2020fd62826f40af73273",
".git/objects/25/6a3cb5ca8382fa1b83cdc6ff5ac76361da510d": "a93b45046d3977dc883003f1a5d77a32",
".git/objects/25/b73e40f94641664e517d3fabfee62a96f2904a": "a9952bcd6bab5b6882ead028b9310833",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/083bead72eb3e0570647d4cd57e5a66298ee87": "a0e2457c014f90a7d041099599ceb7ef",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/d1d309637f99c335d56872838100a58ffb1015": "b185b87a473a573e1602d9deb4b9aaa4",
".git/objects/30/9288fc9bbad524d7c662810a682f940b0f1675": "5968ebf183b86812d6ea74b3bfd3ed68",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/32/cae5ee17365625c88210a136a73a8d2c6e0c62": "c84d28286fd22a594cfc154b068de00f",
".git/objects/33/be4a901c9aef2581420b6a0f0621fa3cd26d4b": "a27d306283c1dcec52018ab1bbfc8350",
".git/objects/35/327b5fb1737f51f70ebe9cc53211668f2d72ce": "19cbc16f2d9c7ebba20070ca82504969",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/3a71dd9ac35a73e88a9205b62ad65df57107d4": "ba3aff515ab15b7d731865d01d9f55e7",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/693fa880de410e3391b503857998b7c1df3c0e": "9aec6d24b5c0c53be3ec6647d4e407bd",
".git/objects/3c/2b56ae09b4956dbfcb15ec0b71c039b39b35bb": "ce85c136b71e31baca45884d11211b1d",
".git/objects/3c/d3ef7d24c92140194005afd6007a973aa82ecf": "b942e361daae08009d8bc3afad1f79c7",
".git/objects/3e/14de7b1052a29f9ef8ef64f2010ab92bbe27d2": "da7b8db213c24c0b12ad9c289bec7c1d",
".git/objects/3e/dcd6c10e69cdeda09be968a06dfb7e73f05bc3": "542266991bcf397afa85974e5584804d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/7ad6d26b5e267101404ccf606d2b2aa9aa23be": "e70d3e0e55d0958e23628ed91825d4f6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/61f5d16891f15eec5f929ca18366d537128193": "e5b5bed96f25e66ab2bafc20e6b8dacf",
".git/objects/4c/c7253272145602276b07feb65e3f9ced7c369d": "4f2ab02be8dbf8cdc5a3cca7aaa9e4ab",
".git/objects/4f/ad0ace428053d5fad57415bd8bf51188025d95": "5f3d8e4f0c57f68bc0a7e039e45be387",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/4cc36bd90139af899cad5804792cdc0b436e1a": "82993efb2dfe4ea38ee1d4a0215505b3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/4341a2f620e34cdd0c8654d4f8e1e9a97ebaef": "e22745d5bbe589accd21cd24b17e6834",
".git/objects/57/59e35951ce50c439cd4cabf0081d5c89e2eaa1": "7e544dd6ecd3621fa931f0ab2d0682ae",
".git/objects/5c/026c0854114dbd41bc4398d4957a9a2210fb12": "fc83afa76aa53db1a0e8de1c6f11719b",
".git/objects/5c/b8e5d4dd1c15c74aadcd5d19e009fb711bd40f": "37c5e462491646dea9c1bdd43fd5b14c",
".git/objects/5d/06eeab03a75002f2dae0aec87c3806d2a12859": "877164fbeb8ea728d024e85b6b925792",
".git/objects/5f/3a9e5435075c5b7069211e8f7ffc32dab491b5": "c6536bdf44d0ec84181452c7d72530a1",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/2ef5e32ce0550169aa21f66b0196c1e68562f5": "0265c5bc949509561f5ac47f637e8f5c",
".git/objects/64/746ce22f4324dbf4af31152891615acdc084ac": "d3e01e722f6f499853960a7809d47b9c",
".git/objects/64/a52b065c3a085d3d6df2a5986948e311676465": "7b6e3415988c4628beb80a6b4c1d2932",
".git/objects/6b/a3c3c0aab732d761bfa206de5f6251160de1b0": "861da39acfd0b96ea0683000e3adf06a",
".git/objects/6c/715f399926b10972ce3537562a25d876e039ab": "bc9b491a6658f6657e99bf2e7211bdc1",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/15acd539122304c1161fb3bbd5e4317cdb2889": "fe1a4b48f16e6c57e1d74ee81f5fd4e1",
".git/objects/71/2aa86ecc5b53c7e5180259f21e29666622f266": "cdbae546f369ed1628c00c559aa07615",
".git/objects/71/a98e983a661135a6c3073684e56f4e85210bd5": "683b9aca25201d776bc3239c358bde53",
".git/objects/76/6fd7962bff9a1332bb6aa4aae699883249e835": "6ca2f5d355dfc96955dca8dc0180203f",
".git/objects/76/b97e698f59937147b5859d039efb09163cd9cb": "86b9266a822de37050a1eeb518e212e0",
".git/objects/7c/cc15623351311e16955d2a377f3a3d500aefd0": "56d329c67703e559f9b00b9c05964429",
".git/objects/7e/92e2ec55516515c2fbb46817ce8b644629ba69": "bd02d72c66bf1a62bee95c2d9a29247a",
".git/objects/80/0a35662ccf1748a10ac4a431d71cab60be6793": "9dd5a08d3127e2ee03be2d944f9a76c3",
".git/objects/80/e6cf53ec732f7c1e4e6917eca41144effb5d19": "4b4b4b0d0fe40e23d9631a64f3074660",
".git/objects/81/661adfec6af4eae7350d225cdb375288eb497b": "9538a561eefdc41041bc6199f1f15962",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/82/fda1f34e908be7e98f81452419ac7d110b2504": "27ae2d48012073d5365ed0c32b6e7ea0",
".git/objects/83/ac7b236a34c5128da28062fbf427b118b625bd": "dafb794d5ce01b8e0574ce763e31e8fb",
".git/objects/83/fd34474480ac32e2e4daca989c008cb6d33f66": "34e02859ceb45ec9b265748354e1638f",
".git/objects/84/bd87f2321420ca5d5ff95b1787df832b4761ad": "dd4709dff252bab66bd3c445e22da438",
".git/objects/84/de4a11cf2edaaf2372b05f40fad636ea702e3d": "115b41f682b01f9629c071a443abaa5e",
".git/objects/86/ef5fcfe79f5f2ce9c8566b55a9e6c6e8a3db32": "115a8af64c7298753d8f3bee884c493d",
".git/objects/87/5f4e6e4db84eefa8c915ee5456a43b36e2170a": "d4fbeb763ce0e7bbff79ad6f627626de",
".git/objects/88/7a07bff737285f4c3fcdd98c3b7cefbd11b2d5": "ca8809e3692704c52af48e7b74fae27d",
".git/objects/88/bdc818a064b026c74fa2a72f639de00e3b004c": "062b4fd91e58be50f889606059827a65",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ab881a590e1832d3bc96dc328c7683f97fa92d": "1e09667aac47ee16ad3cb40e3725e6ad",
".git/objects/89/fe5f7ccb3ceb3b65e3b75cd8d9302eb8636545": "122f4167f3281bd69b4092d7253415b3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/decdc29dca6917e186d77eafa5342cedb3e82d": "0a61ba368073d39bf195296aa7690582",
".git/objects/8c/25b023efe3e4be2c2930d5526401100d95c4cd": "1ab8f16ea162abe183cb25dc0aac0f0c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/698b61edd2bf6a7d22d36f8e44c004d93fcf03": "0af04d9c45e36eb370d546e6d6cfd995",
".git/objects/90/f22b0774a7574374ea7bd4b99b4307a1860609": "6e8aef81535b214dcfda6a9459b307cf",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/70229fdb8652fc30900ff4264c2da507b68d63": "9f4c5b8fd7f614d8431179b56f3fb819",
".git/objects/96/324048d9aecb8e00d04db89cc4f8cf4144374a": "842e7df5e3409227eef5cdaacc9ceff1",
".git/objects/98/42d004e6031d09a251ce11cb3d7079df69d075": "4106019cf314c2f729fcbcc1ef2d58dc",
".git/objects/99/db0650a85d5e198f82a58f9ea1ca976a9766a6": "bb1f1e256121117614dba3cb4d9e8103",
".git/objects/9b/0911ebb339a28d138b1ce4fdc8fea88e5bb064": "2c5f2589ced2ebd02bda7ce4b9e7a191",
".git/objects/9d/4944ce896acf88688b976a3d01c0adef9588f3": "3fe54ea7e94c462651629265ad33c24e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/6f5a068f19e8cedd17a177056d567c053c07db": "ea6b2f7695afc4c95926c4716f3cfbb1",
".git/objects/9d/c3f06a2e722c905bdb5fa81ce3e7a245712f27": "c2d2620b56350ef016994b6717edf26b",
".git/objects/9e/e89cf2825ffba444e1ffbab80b98d9b3da96f2": "40d59d09e7519ae8bc9b3604d3f029ca",
".git/objects/a1/4f82031a7e96264269a7f4aa2f707d0d979c4e": "05b7516996b5aa7a5689ac4132d94070",
".git/objects/a1/9a2e25356a1f1dfc707010faa3fda31bf9dc1f": "b49f83533ca26bb621660400adacf022",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a5/911e8c7fadc00d6ad94b16bf66a7f4adfc6cf8": "1c8aa33db6283fd1e3fb7f1fd10e9947",
".git/objects/a6/8860e0f1de062345c0dfcaa5a46dc573395935": "606a011073f11b8cc1f911360d4fc84c",
".git/objects/a7/9f625f5265873e238043c3c7decd717e70acc9": "a4599f32b89810fd5eb687f20460e92d",
".git/objects/a7/cd70260c18c96dbcc6235e371b7e930257dbb4": "a4b05a370fadfafd07b18da3f9a31dbf",
".git/objects/aa/1ed5779796bfc4288bf812a4582b6dac685ddc": "3722bb9384ffc4c3913bae3084e5a8db",
".git/objects/ab/0ee08c46b0e2c3c02c3d32a0577358e9568a0a": "06f8ae0161262a1316f5c5bc72d13760",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/d0a069e54f19a15cc9a1d79e5c792abe433549": "4b315f1c2fb0d435f43c1393704dab44",
".git/objects/ac/920fe902de78a9f62f6aad6bdf3623573e6848": "f8aa7b0f652d6cc63edb33117017d18e",
".git/objects/ac/b1c81ec561edddd8c9f06f17c37b766664184d": "7eb4055b4dda462202bc8a0bb847588c",
".git/objects/ac/c5649e443dd74608d1e9473380ee07149e42ac": "5ddb73a00ab56aa409af8914e1f9c579",
".git/objects/ac/f52fc541a265a3deea01e41acf0dc869ecd64b": "0f05a23b91c5de6d8afa310019658799",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/64904255d75ff453138109b3b6773885623bfb": "4c2e5bb27edab7244c9952d52b10d394",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b5/f2fb59758c8c2b1bad8394acb250e226b7edcc": "2c02ba489119fca26606184456569ce5",
".git/objects/b6/5e54323b26fa956380cc232e62aae8f0db802d": "de9a35ade1925315f8b6b76b84c8f707",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bc35eb570114a5665041e450ba15f515c6a235": "03bfcfaf2a840b1585fb62463727746c",
".git/objects/b8/80da3373f23f043637f011df18423faac8c066": "107c8c12ff7faba617ac72cb890530ab",
".git/objects/b9/1136a19235da92f9d45a6b0483d32b0958c8c8": "06a812b3edefd8278ff2ce43f3bdd5ca",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/3059287d3401cdb55a8fc0c7cb61e23ffc49c9": "e1f07de1d2d11966927b34e6d7523f48",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/eabeefc153d1355067d9e5cc62b6f415f120c9": "640bb8a1a6649c80f63ef52b8a33db6f",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/9754089a94673a5a0d2f3e05ab407a1ad2f58c": "a89d9092eede3e072fb4f7168bd9f252",
".git/objects/c6/7213bf0aba83f1d722dbceaf7e14d37952196d": "f39219b7fa86a97ed41c69e426ce47fc",
".git/objects/c6/8f66bdbf8cfa741a93b80a8781f2a87257136d": "fc158557ce18e5ba27e87dd351fa8f5a",
".git/objects/c6/b0a2a27a3d03d7db98b7280121b3e6479c3023": "e038187ee27314a1658b38466bff7a41",
".git/objects/c8/2bcce817207ee43b5d5ce3be2353cac4dcc308": "87f92f676ceb137fdf3f0d671b6024e5",
".git/objects/cb/f41af73711767a3451a3c61d1b0f94785c9938": "731b4deef469a1ab7253b0a015aa7505",
".git/objects/d2/299dbcc28b28ae65a787c838b6cbbdd117b10a": "4851f2784cdf23a3c99be09525719bc5",
".git/objects/d2/4419721acae8567412754545be8bbcf246934b": "47814a83322e9da2da183964870b11c8",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/df1fe9b11d10514338e7932fdf1eb01b8eecc4": "cfee6b130bc771e196878b18525365f0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/90055ac787d6758b35df30e44da2f79c880a99": "56b2201c70016a5b9e557ec11041dd65",
".git/objects/db/af50f5d94205260aad760682db963afa051ea3": "d15efb151b096186c1ca63db439ecb7a",
".git/objects/dc/67e4c3295e2d9c93a558a66814eca3804fd956": "5334c459e577bc6c6f3e8df8a7370b6a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/e68bb5f563e692c82c66faebc5a44feadcf373": "81896b201631d7630817e29c064ee16c",
".git/objects/e0/034c78bffba513e31a72d4901f37a7cbab3852": "c3d0c1e84500402e08fe30e7bb8bca8a",
".git/objects/e0/194cd101bb2fd4cbde558238d0c7282fb23041": "3d06081278a195400cfe8fae1bf63db7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/1f4bbd3bf2c73bd578aa9b99007de670f7215f": "02473a222360b7d087572224aa7f3003",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/3401e4322af44aec2529c714b979255d3e7bc3": "18660e40f01fc4810c89fc5a99e278d4",
".git/objects/e5/e68f084c8f278df64b2fe5748452e86b6ae632": "0e4b26e22e6e1618dbd1dfd7d9321b9a",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f01601ba0129fbd82709fb8ede307f2b21c579": "2846f18a0957af89d65c811a63d2e8c5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/a1e059e71d3a3b37bf3e356fdfa00eab50ece1": "9e9247afed2ff6c4e7efb41e4d4f8d3e",
".git/objects/eb/647e8741f5cc98f8e1135fb1e460c802240cd8": "123b551837ff695ad40925bed8cef199",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ae8741bdd791f7e6ed52ca74483c9b23177f38": "c5fc6257dd804f1c33ca212c3d412af4",
".git/objects/ee/09cba767ec04b91ebedb2b3131fa7724f90cdc": "4b5cd95fd4e2faaf024df8b67317e008",
".git/objects/ee/f22a41fc6702078022d61c91b902f119b2747e": "43d75f41ee125c5e8a81316641a17dc8",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f1/f1a54dbc3f79c0fef82b4fc95389a5ce23544f": "28cfb0faa4d2719315fcc2d0a830c068",
".git/objects/f2/99f4a780bdcd310c8f7800b02ef911cde3a983": "1ea3bc6924dc777703dc02a62443cf57",
".git/objects/f4/85075f1900b2f4d062520c571ce5cf62eb5e1a": "292ee96c5056fb843124ae2b9a15e807",
".git/objects/f6/d66366bdf4f6119ed6ac0280dd0e9b41d077ef": "74dde96aa3aacb563cabf611cfb3cd9b",
".git/objects/f7/39449dafbd949e026fd50c3ea06ce09239e404": "5f4b8d9340001d5e2417f4973178deb4",
".git/objects/f8/54869ef40aba4870a94b966bd413ae89f7b818": "653cc573fad071c38008c7d0e344a7af",
".git/objects/f9/1e2f2b79f2659aac3cbbeb59d0e27909353f42": "d8692768f5e4a4b6e21d3015b04d2b25",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/696598efdc513153142ba20c997e6f2f7e204c": "7b4764bfe32c7d00c6d4a3d34fc0724e",
".git/objects/fc/bf22e3edf68c052bc3b59f7aa725f52821016e": "5c695fd75df4a73f254e4bc7747d3abf",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/e4c97a666d7e17ad2976af423bbea07463f72b": "58cc419719752fd393e6048ff7e69910",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/ff/11fbe3e49e7fa1daf4ed6d0bf41c8fc95e8789": "856be34f180734ccc14894a51c76d73f",
".git/objects/pack/pack-bc834828b6f200b69f5de9d8a7e230ceb5295de5.idx": "f00c09ff352dd441c59216bdfc8b0b1a",
".git/objects/pack/pack-bc834828b6f200b69f5de9d8a7e230ceb5295de5.pack": "ffccfb22beba9a340becab3ddd4cb6ef",
".git/ORIG_HEAD": "59250520f37f44e699485d4f676c0fb1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "dc16f1a2986c7f9e3229c3103e474453",
".git/refs/remotes/origin/main": "b83d9323834988698c2546f7c6229d81",
"assets/AssetManifest.bin": "918d35d7101f79acc953e8f2ed4a5d5d",
"assets/AssetManifest.bin.json": "53d77963fc3f900e5aac781f91c96435",
"assets/AssetManifest.json": "e48c0d5c2d6fc09e69df0058d5abe8a9",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/1mizan.png": "09396ddb766d5cc7f0f6ca8d1c7361fb",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg.png": "d4724686f9b01b296c6f83b1b7fab268",
"assets/assets/images/fiverr.png": "cbb3927f9308f39d29c171e1905298ee",
"assets/assets/images/mh-white.png": "27f356c417443636ece54a01aaf55711",
"assets/assets/images/mizan.png": "84ef50630a826be79f385a864707dfc2",
"assets/assets/images/upwork.png": "ba8bcd50624fa1163020692526548cfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "7f18dc45152f773077e830e02f3e0264",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon0.png": "5dcef449791fa27946b3d35ad8803796",
"favicon1%20(2).png": "5dcef449791fa27946b3d35ad8803796",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "741862e2455e81f499e2e410b709671e",
"/": "741862e2455e81f499e2e410b709671e",
"main.dart.js": "261685135a92b8a1833290f6f7b19d46",
"manifest.json": "6b581b1cb5492ced86766afc04dd1cb0",
"version.json": "1f9c1a631809cfba22d65bb1d03c2628",
"website.zip": "959b23d96b1c008aacfbf5b0173b4cb7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
