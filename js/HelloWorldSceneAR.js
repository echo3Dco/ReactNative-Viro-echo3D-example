'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroQuad,
  ViroNode,
  ViroAnimations,
  ViroConstants
} from 'react-viro';

var createReactClass = require('create-react-class');

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      hasARInitialized : false,
      text : "Initializing AR...",
      apiKey : "",
      db : [],
    };
  },
  render: function() {
    
    // Parse echoAR database
    var entries = []
    for (let entry of this.state.db) {
      // Parse entry
      var srcModel = "https://console.echoar.xyz/query?key=" + this.state.apiKey + "&file=";
      var typeModel = entry['hologram'].filename.toLowerCase().split('.').pop();
      switch (entry['hologram'].type) {
        case 'VIDEO_HOLOGRAM':
        case 'IMAGE_HOLOGRAM':
          continue;
        case 'MODEL_HOLOGRAM':
          switch (typeModel) {
            case 'glb':
              srcModel += entry['hologram'].storageID;
              break;
            case 'gltf':
            case 'obj':
            case 'fbx':
              srcModel += entry['additionalData'].glbHologramStorageID;
              break;
          }
          break;
      }
      // Parse additional data
      var x = (entry['additionalData'].x) ? parseFloat(entry['additionalData'].x) * .1 : 0;
      var y = (entry['additionalData'].y) ? parseFloat(entry['additionalData'].y) * .1 : 0;
      var z = (entry['additionalData'].z) ? parseFloat(entry['additionalData'].z) * .1 : 0;
      var scale = (entry['additionalData'].scale) ? parseFloat(entry['additionalData'].scale) * .1 : .1;
      var xAngle = (entry['additionalData'].xAngle) ? parseFloat(entry['additionalData'].xAngle) : 0;
      var yAngle = (entry['additionalData'].yAngle) ? parseFloat(entry['additionalData'].yAngle) : 0;
      var zAngle = (entry['additionalData'].zAngle) ? parseFloat(entry['additionalData'].zAngle) : 0;
      var direction = entry['additionalData'].direction; var spin = false;
      if (direction && (direction == "right" || direction == "left")){
        spin = true;
        direction = "spinRight";
      }
      var textString = (entry['additionalData'].text) ? entry['additionalData'].text : "";
      var textScale = (entry['additionalData'].textScale) ? parseFloat(entry['additionalData'].textScale) * .5: .5;
      var xTextPosition  = (entry['additionalData'].xTextPosition) ? parseFloat(entry['additionalData'].xTextPosition) * .1 : 0;
      var yTextPosition  = (entry['additionalData'].yTextPosition) ? parseFloat(entry['additionalData'].yTextPosition) * .1 : 0;
      var zTextPosition  = (entry['additionalData'].zTextPosition) ? parseFloat(entry['additionalData'].zTextPosition) * .1 : 0;
      var textColor  = (entry['additionalData'].textColor ) ? entry['additionalData'].textColor : '#ffffff';
      var textStyle = StyleSheet.create({
        style: {
          fontFamily: 'Arial',
          fontSize: 30,
          color: textColor,
          textAlignVertical: 'center',
          textAlign: 'center',
        },
      });

      // Push entry
      entries.push(
        /* Node that contains a light, an object and a surface to catch its shadow
        notice that the dragType is "FixedToWorld" so the object can be dragged
        along real world surfaces and points. */
        <ViroNode key={entry.id} position={[x,y-.5,z-.5]} dragType="FixedToWorld" onDrag={()=>{}} animation={{name: direction, run: spin, loop: true}}>

          {/* Text to show whether or not the AR system has initialized yet, see ViroARScene's onTrackingInitialized */}
          <ViroText text={textString} scale={[textScale, textScale, textScale]} position={[xTextPosition, yTextPosition, zTextPosition]} style={textStyle.style} />

          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 13, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          <Viro3DObject
            source={{uri: srcModel}}
            position={[0, 0, 0]}
            scale={[scale, scale, scale]}
            rotation={[xAngle, yAngle, zAngle]}
            type="GLB"
            lightReceivingBitMask={5}
            shadowCastingBitMask={2}
          />

          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />

        </ViroNode>
      )
    }

    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>

        {/* 3D models */}
        { entries }

        {/* Text to show whether or not the AR system has initialized yet, see ViroARScene's onTrackingInitialized */}
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

        {/* Scene lighting */}
        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />
        {/* <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0,-1,-.2]}
            position={[0, 3, 1]}
            color="#aaaaaa"
            castsShadow={true}
            /> */}

        {/* Node that contains a light, an object and a surface to catch its shadow
        notice that the dragType is "FixedToWorld" so the object can be dragged
        along real world surfaces and points. */}
        <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >

          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0,-1,-.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />

          <ViroQuad
            rotation={[-90,0,0]}
            width={.5} height={.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2} />

          </ViroNode>

      </ViroARScene>
    );
  },
  _onTrackingUpdated(state, reason) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (!this.state.hasARInitialized && state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        hasARInitialized : true,
        text : "",
        apiKey : global.echoDB.apiKey,
        db : Object.values(global.echoDB.db)
      });
    }
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
  spinRight: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
  spinLeft: {
    properties: {
      rotateY: "-=90"
    },
    duration: 250, //.25 seconds
  },
});

module.exports = HelloWorldSceneAR;
