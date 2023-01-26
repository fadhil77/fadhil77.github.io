(function(){
    var script = {
 "start": "this.playAudioList([this.audio_F8174138_C98C_3028_41EB_2C57C353D41B]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_99C4C778_9BC2_6E29_41E0_03F1D83B34D0], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist,this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist,this.mainPlayList]); this.playList_E2D2A193_ED15_781F_41C6_156684FD5412.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_980037BB_9BC1_EE2F_41C3_D7111C5DA903].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4",
  "this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F",
  "this.Container_D496927A_CA9C_502B_41E0_5DC314419675",
  "this.MapViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "class": "Player",
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4",
 "definitions": [{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_F8174138_C98C_3028_41EB_2C57C353D41B.mp3",
  "oggUrl": "media/audio_F8174138_C98C_3028_41EB_2C57C353D41B.ogg"
 },
 "data": {
  "label": "657292__Ilan_Pustopetski_-_Top_WOW_-_AO-000450_-_Master_-_241121_-_BOV_-_ORG_-_2444"
 },
 "class": "MediaAudio",
 "id": "audio_F8174138_C98C_3028_41EB_2C57C353D41B",
 "autoplay": true
},
{
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "rollOverOpacity": 0.8,
 "label": "Media",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "Pintu Masuk",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "Denah ",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Kolam Kura - kura",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "Lobby",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "Lantai 1 - Mading",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "Lantai 1",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "Lantai 1",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "Lantai 1",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "Lantai 1",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "9",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "10",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "11",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "12",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "13",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "14",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "class": "MenuItem",
   "label": "15",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "class": "MenuItem",
   "label": "16",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "fontColor": "#FFFFFF",
 "id": "Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "backgroundColor": "#404040"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E2D2A193_ED15_781F_41C6_156684FD5412"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_t.jpg",
 "label": "12",
 "id": "panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_t.jpg",
 "partial": false,
 "label": "Lobby",
 "id": "panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "x": 243.96,
   "angle": 90.82,
   "y": 328.92,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.96,
  "pitch": 1.1
 },
 "class": "PanoramaCamera",
 "id": "panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_t.jpg",
 "label": "14",
 "id": "panorama_4EDA3179_4500_F178_41CE_2327585C4326",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDA3179_4500_F178_41CE_2327585C4326_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_t.jpg",
 "label": "Kolam Kura - kura",
 "id": "panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EAC9523_4500_7688_41D0_B475B1E45597_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_E2D1819B_ED15_780F_41D7_A9361937B4C7",
  "this.PanoramaPlayListItem_E2D0D1AB_ED15_780F_4199_06D66EE4EFFF",
  {
   "media": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_camera"
  },
  "this.PanoramaPlayListItem_E2DFA1AB_ED15_780F_4199_9988D4259844",
  "this.PanoramaPlayListItem_E2DF01AB_ED15_780F_41E9_CCE174CD2C77",
  {
   "media": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_camera"
  },
  {
   "media": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F_camera"
  },
  {
   "media": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_camera"
  },
  {
   "media": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_camera"
  },
  {
   "media": "this.panorama_4EDF9980_4500_1188_4186_627417435490",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF9980_4500_1188_4186_627417435490_camera"
  },
  {
   "media": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_camera"
  },
  {
   "media": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_camera"
  },
  {
   "media": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_camera"
  },
  {
   "media": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_camera"
  },
  {
   "media": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326_camera"
  },
  {
   "media": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_camera"
  },
  {
   "media": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_t.jpg",
 "label": "16",
 "id": "panorama_4EAB8E52_4500_128B_41BA_D84A29153A37",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDA3179_4500_F178_41CE_2327585C4326_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDF9980_4500_1188_4186_627417435490_t.jpg",
 "label": "9",
 "id": "panorama_4EDF9980_4500_1188_4186_627417435490",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDF9980_4500_1188_4186_627417435490_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF9980_4500_1188_4186_627417435490_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.55,
  "pitch": -3.84
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": -0.55,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": -3.84,
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "id": "panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_camera"
  },
  {
   "media": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_camera"
  },
  {
   "media": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_camera"
  },
  {
   "media": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_camera"
  },
  {
   "media": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597_camera"
  },
  {
   "media": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_camera"
  },
  {
   "media": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F_camera"
  },
  {
   "media": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_camera"
  },
  {
   "media": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_camera"
  },
  {
   "media": "this.panorama_4EDF9980_4500_1188_4186_627417435490",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF9980_4500_1188_4186_627417435490_camera"
  },
  {
   "media": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_camera"
  },
  {
   "media": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_camera"
  },
  {
   "media": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_camera"
  },
  {
   "media": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_camera"
  },
  {
   "media": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326_camera"
  },
  {
   "media": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_camera"
  },
  {
   "media": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist, 16, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_camera"
  }
 ],
 "id": "DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_t.jpg",
 "label": "Lantai 1",
 "id": "panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_camera"
  },
  {
   "media": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_camera"
  },
  {
   "media": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_camera"
  },
  {
   "media": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_camera"
  },
  {
   "media": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597_camera"
  },
  {
   "media": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_camera"
  },
  {
   "media": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F_camera"
  },
  {
   "media": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_camera"
  },
  {
   "media": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_camera"
  },
  {
   "media": "this.panorama_4EDF9980_4500_1188_4186_627417435490",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF9980_4500_1188_4186_627417435490_camera"
  },
  {
   "media": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_camera"
  },
  {
   "media": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_camera"
  },
  {
   "media": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_camera"
  },
  {
   "media": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_camera"
  },
  {
   "media": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326_camera"
  },
  {
   "media": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_camera"
  },
  {
   "media": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 16, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_camera"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_t.jpg",
 "label": "Lantai 1",
 "id": "panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_t.jpg",
 "label": "Lantai 1",
 "id": "panorama_4EDC630C_4500_F29F_41C0_04412F67097F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDC630C_4500_F29F_41C0_04412F67097F_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_camera"
  },
  {
   "media": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_camera"
  },
  {
   "media": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_camera"
  },
  {
   "media": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_camera"
  },
  {
   "media": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597_camera"
  },
  {
   "media": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_camera"
  },
  {
   "media": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDC630C_4500_F29F_41C0_04412F67097F_camera"
  },
  {
   "media": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_camera"
  },
  {
   "media": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF3C5B_4500_16B8_41C8_7CC2631FC5DA_camera"
  },
  {
   "media": "this.panorama_4EDF9980_4500_1188_4186_627417435490",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDF9980_4500_1188_4186_627417435490_camera"
  },
  {
   "media": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_camera"
  },
  {
   "media": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_camera"
  },
  {
   "media": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_camera"
  },
  {
   "media": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_camera"
  },
  {
   "media": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EDA3179_4500_F178_41CE_2327585C4326_camera"
  },
  {
   "media": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_camera"
  },
  {
   "media": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist, 16, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_camera"
  }
 ],
 "id": "ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_t.jpg",
 "partial": false,
 "label": "Lantai 1 - Mading",
 "id": "panorama_4EAC9523_4500_7688_41D0_B475B1E45597",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAC9523_4500_7688_41D0_B475B1E45597_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "x": 341.62,
   "angle": 167.71,
   "y": 283.44,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "hfov": 360
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_t.jpg",
 "label": "13",
 "id": "panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_t.jpg",
 "partial": false,
 "label": "Denah ",
 "id": "panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
   "class": "AdjacentPanorama"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "x": 97.59,
   "angle": -164.4,
   "y": 403.49,
   "class": "PanoramaMapLocation"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_CE6A92D6_D99F_D07B_41DF_DF6F5B108A1A",
  "this.overlay_F043AA5A_D99C_5068_41DE_CCFE3B3DB42F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDF9980_4500_1188_4186_627417435490_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_out",
 "id": "FadeOutEffect_B15FAF0D_BE80_8DE9_41D0_DACABE1364EA",
 "duration": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDC630C_4500_F29F_41C0_04412F67097F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC",
 "buttonZoomOut": "this.IconButton_D497427A_CA9C_502B_41CE_A34B0854B672",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDAF18B_4500_3198_41A8_CC0FD0BF3ACE_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_t.jpg",
 "label": "Lantai 1",
 "id": "panorama_4EDE1268_4500_3298_41BC_CF72A4F73571",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDF007E_4500_2F78_41D1_1CE5F936FBBC_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_B15FEF0D_BE80_8DE9_41E7_912D397634C6",
 "levels": [
  {
   "url": "media/zoomImage_B1E2714E_BE83_746B_41DE_DC6701FA2922_0_0.png",
   "class": "ImageResourceLevel",
   "width": 624,
   "height": 416
  },
  {
   "url": "media/zoomImage_B1E2714E_BE83_746B_41DE_DC6701FA2922_0_1.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDB05DE_4500_71BB_41CA_D7354CBAF9FB_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_t.jpg",
 "label": "15",
 "id": "panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EABABEE_4500_1198_41BD_5DE9DA19CB71_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EC5295C_4501_FEBF_41BB_5B805D5A3B48_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_t.jpg",
 "partial": false,
 "label": "Pintu Masuk",
 "id": "panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
   "class": "AdjacentPanorama"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "x": 45.36,
   "angle": -81.73,
   "y": 335.09,
   "class": "PanoramaMapLocation"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D12A1D8D_CAB7_D0E8_41D5_6F5D6C1C0A02",
  "this.overlay_CD1538CC_CA74_D068_41B7_C810B1B130FB"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_t.jpg",
 "label": "10",
 "id": "panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "buttonPause": "this.IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomOut": "this.IconButton_D497427A_CA9C_502B_41CE_A34B0854B672",
 "buttonPlayRight": "this.IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1",
 "buttonMoveDown": "this.IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_D497627A_CA9C_502B_41E7_E28B91E26211",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveRight": "this.IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB",
 "buttonMoveLeft": "this.IconButton_D497727A_CA9C_502B_41B3_33275185F6AC",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_99C4C778_9BC2_6E29_41E0_03F1D83B34D0",
 "buttonZoomIn": "this.IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC",
 "buttonRestart": "this.IconButton_D497527A_CA9C_502B_41E7_D91133DF583A"
},
{
 "thumbnailUrl": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_t.jpg",
 "fieldOfViewOverlayInsideColor": "#CC3333",
 "label": "DENAH MUSEUM KOMODO",
 "id": "map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
 "fieldOfViewOverlayInsideOpacity": 0.44,
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225.jpeg",
    "class": "ImageResourceLevel",
    "width": 1152,
    "height": 676
   },
   {
    "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 334,
    "height": 196,
    "tags": "preload"
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "width": 1152,
 "fieldOfViewOverlayRadiusScale": 0.21,
 "initialZoomFactor": 1,
 "overlays": [
  "this.overlay_9D03ECB4_9B42_2239_41D4_5CC0B1DF274E",
  "this.overlay_98185F11_9B4E_5FEB_41BF_3507395FCB77",
  "this.overlay_966C8238_9BC1_E62A_41DE_5A885DD2C85E",
  "this.overlay_9940ADFF_9BCE_2227_41D7_B353C3AE3AB3"
 ],
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0.16,
 "height": 676
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem",
   "media": "this.map_9DC951D4_9B4E_2279_41BB_8E8B49A45225",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E2D29193_ED15_781F_41E5_06A438FA32A0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EAB8E52_4500_128B_41BA_D84A29153A37_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in",
 "id": "FadeInEffect_B15F8F0D_BE80_8DE9_41DB_7CE47724023F",
 "duration": 500
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_t.jpg",
 "label": "11",
 "id": "panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EC5AA32_4500_3288_41CC_079CA565D0CF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E2F501AB_ED15_780F_41EC_66BBAB4390DB",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDE1268_4500_3298_41BC_CF72A4F73571_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4EDAFA17_4507_F288_41CB_F9621FB0AF61_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#FF0000",
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#FF0000",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#FF0000",
 "toolTipFontColor": "#606060",
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "overflow": "scroll",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 648.6,
 "contentOpaque": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Image_D78179BD_CB94_3028_41E6_612D282D8830",
  "this.Image_D7E93762_CB94_5058_41BE_7C2D2926C424"
 ],
 "class": "Container",
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "backgroundOpacity": 0,
 "width": 573,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 25,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 116,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "class": "Container",
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "hide": "this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, true, 0, null, null, false); this.setComponentVisibility(this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762, true, 0, null, null, false)",
 "visible": false,
 "data": {
  "name": "--INFO "
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "class": "Container",
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "class": "Container",
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "class": "Container",
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--CONTACT"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD"
 ],
 "class": "Container",
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "backgroundOpacity": 1,
 "width": 262.82,
 "scrollBarWidth": 10,
 "right": "7.31%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "bottom": "0.43%",
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 30,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "horizontal",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 51,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "visible": false,
 "id": "ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4",
 "width": "51.711%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#FFFFFF",
 "right": "23.15%",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 5,
 "paddingBottom": 10,
 "minWidth": 1,
 "playList": "this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4_playlist",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 75,
 "borderSize": 0,
 "itemLabelFontStyle": "normal",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "paddingRight": 20,
 "itemOpacity": 1,
 "gap": 10,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailWidth": 100,
 "height": 130.03,
 "itemBorderRadius": 0,
 "itemThumbnailShadowOpacity": 0.8,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "layout": "horizontal",
 "itemThumbnailShadow": true,
 "class": "ThumbnailList",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.2,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "bottom": "23.15%",
 "paddingLeft": 20,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "shadow": false,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 4,
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "data": {
  "name": "THUMBNAIL"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailScaleMode": "fit_outside",
 "minHeight": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#8A8A8A",
 "class": "DropDown",
 "id": "DropDown_21F0C7EC_30EF_7595_41B1_33707584511F",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 0.72,
 "popUpFontColor": "#000000",
 "right": "39.18%",
 "width": "19.859%",
 "borderRadius": 4,
 "paddingBottom": 0,
 "minWidth": 200,
 "playList": "this.DropDown_21F0C7EC_30EF_7595_41B1_33707584511F_playlist",
 "popUpBorderRadius": 0,
 "popUpShadowSpread": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0.06%",
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#FFFFFF",
 "paddingRight": 5,
 "borderSize": 0,
 "paddingLeft": 5,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "fontSize": 14,
 "popUpGap": 0,
 "popUpBackgroundOpacity": 0.72,
 "popUpShadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "fontColor": "#333333",
 "data": {
  "name": "LIST PANORAMA TEXT"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "minHeight": 20,
 "height": "5.644%",
 "fontWeight": "normal"
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_D497427A_CA9C_502B_41CE_A34B0854B672",
  "this.IconButton_D497527A_CA9C_502B_41E7_D91133DF583A",
  "this.IconButton_D497627A_CA9C_502B_41E7_E28B91E26211",
  "this.IconButton_D497727A_CA9C_502B_41B3_33275185F6AC",
  "this.Container_D497027A_CA9C_502B_41D4_3B92D6DCF51A",
  "this.IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4",
  "this.IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1",
  "this.IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4",
  "this.IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC"
 ],
 "class": "Container",
 "id": "Container_D496927A_CA9C_502B_41E0_5DC314419675",
 "backgroundOpacity": 0,
 "width": "30.769%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "33.83%",
 "minWidth": 392,
 "overflow": "hidden",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "bottom": "4.2%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadow": false,
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": true,
 "visible": false,
 "data": {
  "name": "Control bar"
 },
 "paddingTop": 0,
 "minHeight": 20,
 "height": "18.813%"
},
{
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0.88%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "31.303%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "42.692%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": "1.85%",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "visible": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "data": {
  "name": "UIComponent2420"
 },
 "paddingTop": 0,
 "minHeight": 0
},
{
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [],
 "visible": false,
 "data": {
  "name": "ZoomImage2421"
 },
 "paddingTop": 0,
 "minHeight": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "layout": "horizontal",
 "data": {
  "name": "CloseButton2422"
 },
 "class": "CloseButton",
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "minWidth": 0,
 "iconColor": "#000000",
 "iconHeight": 20,
 "iconWidth": 20,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "borderSize": 0,
 "paddingLeft": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "shadow": false,
 "pressedIconColor": "#888888",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "visible": false,
 "iconLineWidth": 5,
 "paddingTop": 5,
 "cursor": "hand",
 "minHeight": 0,
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "IconButton",
 "id": "IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D496F27A_CA9C_502B_4197_CDA58520C4A4_pressed_rollover.png",
 "data": {
  "name": "Button49930"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_980037BB_9BC1_EE2F_41C3_D7111C5DA903",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_980037BB_9BC1_EE2F_41C3_D7111C5DA903.png",
 "transparencyActive": true,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "height": 40,
 "data": {
  "name": "FS"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "media": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E2D1819B_ED15_780F_41D7_A9361937B4C7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_camera",
 "id": "PanoramaPlayListItem_E2D1819B_ED15_780F_41D7_A9361937B4C7"
},
{
 "media": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E2D0D1AB_ED15_780F_4199_06D66EE4EFFF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_camera",
 "id": "PanoramaPlayListItem_E2D0D1AB_ED15_780F_4199_06D66EE4EFFF"
},
{
 "media": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E2DFA1AB_ED15_780F_4199_9988D4259844, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_4EC5B7D0_4500_3188_41C9_64ACB00004B8_camera",
 "id": "PanoramaPlayListItem_E2DFA1AB_ED15_780F_4199_9988D4259844"
},
{
 "media": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E2DF01AB_ED15_780F_41E9_CCE174CD2C77, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_4EAC9523_4500_7688_41D0_B475B1E45597_camera",
 "id": "PanoramaPlayListItem_E2DF01AB_ED15_780F_41E9_CCE174CD2C77"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F5141572_D99C_D038_41E5_A75443B4EEFC",
   "pitch": -18.17,
   "yaw": -21.17,
   "hfov": 23.48,
   "distance": 100
  }
 ],
 "id": "overlay_CE6A92D6_D99F_D07B_41DF_DF6F5B108A1A",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -18.17,
   "hfov": 23.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F513B579_D99C_D028_41C3_2A4822072D8B",
   "pitch": -10.48,
   "yaw": -95.23,
   "hfov": 24.3,
   "distance": 100
  }
 ],
 "id": "overlay_F043AA5A_D99C_5068_41DE_CCFE3B3DB42F",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -10.48,
   "hfov": 24.3
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "IconButton",
 "id": "IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D496827A_CA9C_502B_41B6_2E74DC2A58EC_pressed_rollover.png",
 "data": {
  "name": "Button49931"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D497427A_CA9C_502B_41CE_A34B0854B672",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497427A_CA9C_502B_41CE_A34B0854B672.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D497427A_CA9C_502B_41CE_A34B0854B672_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497427A_CA9C_502B_41CE_A34B0854B672_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497427A_CA9C_502B_41CE_A34B0854B672_pressed_rollover.png",
 "data": {
  "name": "Button49920"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F5157571_D99C_D038_41E3_1ECAF45DB069",
   "pitch": -17.07,
   "yaw": -86.38,
   "hfov": 23.62,
   "distance": 100
  }
 ],
 "id": "overlay_D12A1D8D_CAB7_D0E8_41D5_6F5D6C1C0A02",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.07,
   "hfov": 23.62
  }
 ],
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 50.62,
 "pitch": -6.37,
 "bleaching": 0.7,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_CD1538CC_CA74_D068_41B7_C810B1B130FB"
},
{
 "class": "IconButton",
 "id": "IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14_pressed_rollover.png",
 "data": {
  "name": "Button49926"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D496E27A_CA9C_502B_41DE_1B81C16D88E1_pressed_rollover.png",
 "data": {
  "name": "Button49929"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F_pressed_rollover.png",
 "data": {
  "name": "Button49927"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D497627A_CA9C_502B_41E7_E28B91E26211",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497627A_CA9C_502B_41E7_E28B91E26211.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D497627A_CA9C_502B_41E7_E28B91E26211_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497627A_CA9C_502B_41E7_E28B91E26211_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497627A_CA9C_502B_41E7_E28B91E26211_pressed_rollover.png",
 "data": {
  "name": "Button49922"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D496D27A_CA9C_502B_41E2_AD7DEA83CDE4_pressed_rollover.png",
 "data": {
  "name": "Button49928"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB_pressed_rollover.png",
 "data": {
  "name": "Button49925"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D497727A_CA9C_502B_41B3_33275185F6AC",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497727A_CA9C_502B_41B3_33275185F6AC.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D497727A_CA9C_502B_41B3_33275185F6AC_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497727A_CA9C_502B_41B3_33275185F6AC_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497727A_CA9C_502B_41B3_33275185F6AC_pressed_rollover.png",
 "data": {
  "name": "Button49923"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_99C4C778_9BC2_6E29_41E0_03F1D83B34D0",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_99C4C778_9BC2_6E29_41E0_03F1D83B34D0.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "height": 40,
 "data": {
  "name": "VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_D497527A_CA9C_502B_41E7_D91133DF583A",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_D497527A_CA9C_502B_41E7_D91133DF583A.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_D497527A_CA9C_502B_41E7_D91133DF583A_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D497527A_CA9C_502B_41E7_D91133DF583A_pressed.png",
 "shadow": false,
 "height": 40,
 "pressedRollOverIconURL": "skin/IconButton_D497527A_CA9C_502B_41E7_D91133DF583A_pressed_rollover.png",
 "data": {
  "name": "Button49921"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "map": {
  "width": 33,
  "x": 29.16,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 318.9,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 33,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "image": {
  "x": 28.86,
  "y": 318.59,
  "width": 33,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 33,
     "height": 33
    }
   ]
  },
  "height": 33
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_9D03ECB4_9B42_2239_41D4_5CC0B1DF274E",
 "data": {
  "label": "1"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 33.59,
  "x": 80.8,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 386.69,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 33.59,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "image": {
  "x": 80.8,
  "y": 386.69,
  "width": 33.59,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 33,
     "height": 33
    }
   ]
  },
  "height": 33.59
 },
 "useHandCursor": false,
 "class": "IconHotspotMapOverlay",
 "id": "overlay_98185F11_9B4E_5FEB_41BF_3507395FCB77",
 "data": {
  "label": "2"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 33.59,
  "x": 227.21,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 312.18,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 33.59,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "image": {
  "x": 227.17,
  "y": 312.13,
  "width": 33.59,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 33,
     "height": 33
    }
   ]
  },
  "height": 33.59
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_966C8238_9BC1_E62A_41DE_5A885DD2C85E",
 "data": {
  "label": "3"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 33.59,
  "x": 324.89,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 266.67,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 33.59,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "image": {
  "x": 324.82,
  "y": 266.65,
  "width": 33.59,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_9DC951D4_9B4E_2279_41BB_8E8B49A45225_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 33,
     "height": 33
    }
   ]
  },
  "height": 33.59
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_9940ADFF_9BCE_2227_41D7_B353C3AE3AB3",
 "data": {
  "label": "4"
 },
 "rollOverDisplay": false
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_99C4C778_9BC2_6E29_41E0_03F1D83B34D0",
  "this.IconButton_9DC5C750_9B42_2E7A_41E0_DAF9AE6996C5",
  "this.IconButton_9D745258_9B7E_266A_41D6_6BD990C3E3EE",
  "this.IconButton_9AC72DAE_9B4E_6226_41B6_703A61D0C14B",
  "this.IconButton_992E2348_9B42_6669_41D2_4EF47B0F2698",
  "this.IconButton_980037BB_9BC1_EE2F_41C3_D7111C5DA903"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "left": "-0.47%",
 "backgroundOpacity": 0,
 "width": "90.83%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "bottom": "4.26%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadow": false,
 "gap": 40,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "71.047%"
},
{
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "left": "7.3%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "1.43%",
 "minWidth": 1,
 "overflow": "visible",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "11.54%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 110,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "left": "16.82%",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "5.28%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "maxWidth": 60,
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1
},
{
 "class": "Image",
 "id": "Image_D78179BD_CB94_3028_41E6_612D282D8830",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "24.956%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_D78179BD_CB94_3028_41E6_612D282D8830.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "maxWidth": 320,
 "height": "75%",
 "maxHeight": 320,
 "data": {
  "name": "logo1"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside"
},
{
 "class": "Image",
 "id": "Image_D7E93762_CB94_5058_41BE_7C2D2926C424",
 "left": "29.49%",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_D7E93762_CB94_5058_41BE_7C2D2926C424.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "2.58%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "maxWidth": 1200,
 "height": "75%",
 "maxHeight": 681,
 "data": {
  "name": "Image17589"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside"
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "class": "Container",
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "10%",
 "minWidth": 1,
 "overflow": "visible",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "13.56%",
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "4.11%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "14%",
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "6.77%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 4,
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": true,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "class": "Container",
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "10%",
 "minWidth": 1,
 "overflow": "visible",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "rollOverShadow": false,
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "width": 81.6,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 0,
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "fontSize": "1.6vw",
 "label": "INFO",
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false); if(!this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427.get('visible')){ this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "height": 40,
 "fontColor": "#000000",
 "layout": "horizontal",
 "visible": false,
 "data": {
  "name": "Button  info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "layout": "horizontal",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "width": 156.8,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "fontSize": "1.6vw",
 "label": "PANORAMA LIST",
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false); this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "height": 40,
 "fontColor": "#000000",
 "visible": false,
 "data": {
  "name": "Button panorama list"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_D497227A_CA9C_502B_41E2_71EF2A81ECCB",
  "this.IconButton_D497327A_CA9C_502B_41D1_0C7E54495D14",
  "this.IconButton_D496C27A_CA9C_502B_41D2_26AAD290B95F"
 ],
 "class": "Container",
 "id": "Container_D497027A_CA9C_502B_41D4_3B92D6DCF51A",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 20,
 "overflow": "hidden",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadow": false,
 "gap": 4,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container49924"
 },
 "paddingTop": 0,
 "minHeight": 20,
 "height": "100%"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F5141572_D99C_D038_41E5_A75443B4EEFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4FF23AFE_4500_337B_41CF_5B84E1E6C024_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F513B579_D99C_D028_41C3_2A4822072D8B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4EAB8FA1_4500_1189_41C4_BE5E84D8047C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F5157571_D99C_D038_41E3_1ECAF45DB069",
 "frameDuration": 41
},
{
 "class": "IconButton",
 "id": "IconButton_9DC5C750_9B42_2E7A_41E0_DAF9AE6996C5",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "iconURL": "skin/IconButton_9DC5C750_9B42_2E7A_41E0_DAF9AE6996C5.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.showPopupImage(this.ImageResource_B15FEF0D_BE80_8DE9_41E7_912D397634C6, null, '90%', '90%', this.FadeInEffect_B15F8F0D_BE80_8DE9_41DB_7CE47724023F, this.FadeOutEffect_B15FAF0D_BE80_8DE9_41D0_DACABE1364EA, {'paddingLeft':5,'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, false); this.setComponentVisibility(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4, false, 0, null, null, false); this.setComponentVisibility(this.Container_D496927A_CA9C_502B_41E0_5DC314419675, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "maxWidth": 35,
 "height": 40,
 "maxHeight": 35,
 "data": {
  "name": "PG"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1
},
{
 "class": "IconButton",
 "id": "IconButton_9D745258_9B7E_266A_41D6_6BD990C3E3EE",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_9D745258_9B7E_266A_41D6_6BD990C3E3EE.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "if(!this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4.get('visible')){ this.setComponentVisibility(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4, true, 0, null, null, false) } else { this.setComponentVisibility(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "shadow": false,
 "height": 40,
 "data": {
  "name": "IKON THUMBNAIL"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_9AC72DAE_9B4E_6226_41B6_703A61D0C14B",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_9AC72DAE_9B4E_6226_41B6_703A61D0C14B.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4, false, 0, null, null, false); this.setComponentVisibility(this.Container_D496927A_CA9C_502B_41E0_5DC314419675, false, 0, null, null, false); if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "shadow": false,
 "height": 40,
 "data": {
  "name": "MAPS"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "class": "IconButton",
 "id": "IconButton_992E2348_9B42_6669_41D2_4EF47B0F2698",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_992E2348_9B42_6669_41D2_4EF47B0F2698.png",
 "transparencyActive": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "if(!this.Container_D496927A_CA9C_502B_41E0_5DC314419675.get('visible')){ this.setComponentVisibility(this.Container_D496927A_CA9C_502B_41E0_5DC314419675, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_D496927A_CA9C_502B_41E0_5DC314419675, false, 0, null, null, false) }; this.setComponentVisibility(this.ThumbnailList_3D929A74_2F01_4E65_415C_5958EBE832F4, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "height": 40,
 "data": {
  "name": "NAVIGASI"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 0
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "scrollBarOpacity": 0.51
},
{
 "class": "IconButton",
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 40,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "shadow": false,
 "maxWidth": 50,
 "height": "75%",
 "maxHeight": 50,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 40
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "class": "Container",
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 80,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "minWidth": 1,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#C1280E",
 "itemPaddingBottom": 3,
 "scrollBarColor": "#FF361B",
 "itemLabelFontStyle": "normal",
 "paddingRight": 70,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemLabelFontFamily": "Oswald Regular",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 30,
 "itemHorizontalAlign": "center",
 "height": "82.297%",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#C1280E",
 "class": "ThumbnailGrid",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 70,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "shadow": false,
 "selectedItemLabelFontSize": 16,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "minHeight": 1
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "class": "Container",
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 80,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "insetBorder": false,
 "class": "WebFrame",
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6934575066234!2d106.89882231455537!3d-6.303947295437601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed5085bb5547%3A0x8ee7c27bfb36ad0e!2sMuseum%20Komodo%20dan%20Taman%20Reptil!5e0!3m2!1sid!2sid!4v1657027661074!5m2!1sid!2sid",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "WebFrame52781"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "83.022%"
},
{
 "layout": "absolute",
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "overflow": "visible",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "scrollBarOpacity": 0.51
},
{
 "class": "IconButton",
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 40,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false); this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "shadow": false,
 "maxWidth": 50,
 "height": "75%",
 "maxHeight": 50,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 40
},
{
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "right": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#FF0000",
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#FF0000",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#FF0000",
 "toolTipFontColor": "#606060",
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5"
 ],
 "class": "Container",
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container arrows"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "100%"
},
{
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "minHeight": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "minWidth": 100,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "minHeight": 520,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "class": "HTMLText",
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 80,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.62vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minHeight": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "IconButton",
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "width": 50,
 "right": 15,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 40,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 15,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false); this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "shadow": false,
 "maxWidth": 50,
 "height": 50,
 "maxHeight": 50,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 40
},
{
 "class": "HTMLText",
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 80,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.62vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 17,
 "minHeight": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "IconButton",
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "width": 70,
 "right": 15,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 40,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "transparencyActive": false,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "18.75%",
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427, true, 0, null, null, false)",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "shadow": false,
 "maxWidth": 50,
 "height": 70,
 "maxHeight": 50,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 40
},
{
 "class": "Image",
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "maxWidth": 1341,
 "height": "100%",
 "maxHeight": 894,
 "data": {
  "name": "Image5820"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 50,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "minHeight": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "class": "Container",
 "height": "100%",
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "minWidth": 100,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 25,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-Container text"
 },
 "paddingTop": 0,
 "minHeight": 520,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "class": "Container",
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "backgroundOpacity": 0,
 "width": "84%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container separator"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "30%"
},
{
 "class": "HTMLText",
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 20,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarColor": "#FF361B",
 "paddingLeft": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.75vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.75vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "100%"
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "class": "Button",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "width": 207,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": "3.7vh",
 "label": "lorem ipsum",
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "height": 59,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button31015"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "HTMLText",
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 3,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarColor": "#FF361B",
 "paddingLeft": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.78vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.75vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.75vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "62.894%"
},
{
 "class": "Image",
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "backgroundOpacity": 0,
 "width": "70%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "maxWidth": 211,
 "height": "30%",
 "maxHeight": 120,
 "data": {
  "name": "Image logo"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald Regular",
 "layout": "horizontal",
 "class": "Button",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "width": 140,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": "2.83vh",
 "label": "CONTACT",
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "shadow": false,
 "iconBeforeLabel": true,
 "height": 59,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Contact"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
}],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "buttonEnterFullscreen": "this.IconButton_980037BB_9BC1_EE2F_41C3_D7111C5DA903",
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player468"
 },
 "paddingTop": 0,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
