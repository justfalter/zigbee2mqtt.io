"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84730],{959339:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-43ec3a6a","path":"/devices/ZNQBKG45LM.html","title":"Aqara ZNQBKG45LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNQBKG45LM control via MQTT","description":"Integrate your Aqara ZNQBKG45LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (top endpoint)","slug":"switch-top-endpoint","link":"#switch-top-endpoint","children":[]},{"level":3,"title":"Switch (center endpoint)","slug":"switch-center-endpoint","link":"#switch-center-endpoint","children":[]},{"level":3,"title":"Switch (bottom endpoint)","slug":"switch-bottom-endpoint","link":"#switch-bottom-endpoint","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Operation mode (enum, top endpoint)","slug":"operation-mode-enum-top-endpoint","link":"#operation-mode-enum-top-endpoint","children":[]},{"level":3,"title":"Operation mode (enum, center endpoint)","slug":"operation-mode-enum-center-endpoint","link":"#operation-mode-enum-center-endpoint","children":[]},{"level":3,"title":"Operation mode (enum, bottom endpoint)","slug":"operation-mode-enum-bottom-endpoint","link":"#operation-mode-enum-bottom-endpoint","children":[]},{"level":3,"title":"Lock relay (binary, top endpoint)","slug":"lock-relay-binary-top-endpoint","link":"#lock-relay-binary-top-endpoint","children":[]},{"level":3,"title":"Lock relay (binary, center endpoint)","slug":"lock-relay-binary-center-endpoint","link":"#lock-relay-binary-center-endpoint","children":[]},{"level":3,"title":"Lock relay (binary, bottom endpoint)","slug":"lock-relay-binary-bottom-endpoint","link":"#lock-relay-binary-bottom-endpoint","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Click mode (enum)","slug":"click-mode-enum","link":"#click-mode-enum","children":[]},{"level":3,"title":"Action slide time (numeric)","slug":"action-slide-time-numeric","link":"#action-slide-time-numeric","children":[]},{"level":3,"title":"Action slide speed (numeric)","slug":"action-slide-speed-numeric","link":"#action-slide-speed-numeric","children":[]},{"level":3,"title":"Action slide relative displacement (numeric)","slug":"action-slide-relative-displacement-numeric","link":"#action-slide-relative-displacement-numeric","children":[]},{"level":3,"title":"Action slide time delta (numeric)","slug":"action-slide-time-delta-numeric","link":"#action-slide-time-delta-numeric","children":[]},{"level":3,"title":"Mode switch (enum)","slug":"mode-switch-enum","link":"#mode-switch-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1716835751000},"filePathRelative":"devices/ZNQBKG45LM.md"}')},610978:(e,o,t)=>{t.r(o),t.d(o,{default:()=>b});var i=t(166252);const d=(0,i._)("h1",{id:"aqara-znqbkg45lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#aqara-znqbkg45lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Aqara ZNQBKG45LM")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZNQBKG45LM")],-1),n=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart wall switch Z1 Pro (quadruple rocker)")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), device_temperature, power_outage_count, power_on_behavior, operation_mode, lock_relay, energy, voltage, current, power, click_mode, action_slide_time, action_slide_speed, action_slide_relative_displacement, action_slide_time_delta, mode_switch, action, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNQBKG45LM.png",alt:"Aqara ZNQBKG45LM"})])],-1),u=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint" aria-hidden="true">#</a> Switch (top endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint" aria-hidden="true">#</a> Switch (bottom endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power on behavior (enum)</h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>previous</code>, <code>off</code>, <code>inverted</code>.</p><h3 id="operation-mode-enum-top-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-top-endpoint" aria-hidden="true">#</a> Operation mode (enum, top endpoint)</h3><p>Decoupled mode for top button. Value can be found in the published state on the <code>operation_mode_top</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_top&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_top&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="operation-mode-enum-center-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-center-endpoint" aria-hidden="true">#</a> Operation mode (enum, center endpoint)</h3><p>Decoupled mode for center button. Value can be found in the published state on the <code>operation_mode_center</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_center&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_center&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="operation-mode-enum-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-bottom-endpoint" aria-hidden="true">#</a> Operation mode (enum, bottom endpoint)</h3><p>Decoupled mode for bottom button. Value can be found in the published state on the <code>operation_mode_bottom</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode_bottom&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_bottom&quot;: NEW_VALUE}</code>. The possible values are: <code>decoupled</code>, <code>control_relay</code>.</p><h3 id="lock-relay-binary-top-endpoint" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary-top-endpoint" aria-hidden="true">#</a> Lock relay (binary, top endpoint)</h3><p>Locks top relay and prevents it from operating. Value can be found in the published state on the <code>lock_relay_top</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay_top&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay_top&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="lock-relay-binary-center-endpoint" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary-center-endpoint" aria-hidden="true">#</a> Lock relay (binary, center endpoint)</h3><p>Locks center relay and prevents it from operating. Value can be found in the published state on the <code>lock_relay_center</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay_center&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay_center&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="lock-relay-binary-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#lock-relay-binary-bottom-endpoint" aria-hidden="true">#</a> Lock relay (binary, bottom endpoint)</h3><p>Locks bottom relay and prevents it from operating. Value can be found in the published state on the <code>lock_relay_bottom</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_relay_bottom&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_relay_bottom&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lock relay is ON, if <code>false</code> OFF.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum" aria-hidden="true">#</a> Click mode (enum)</h3><p>Click mode for wireless button. fast: only supports single click but allows faster reponse time.multi: supports multiple types of clicks but is slower, because it awaits multiple clicks.. Value can be found in the published state on the <code>click_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;click_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="action-slide-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-time-numeric" aria-hidden="true">#</a> Action slide time (numeric)</h3><p>Value can be found in the published state on the <code>action_slide_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="action-slide-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-speed-numeric" aria-hidden="true">#</a> Action slide speed (numeric)</h3><p>Value can be found in the published state on the <code>action_slide_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mm/s</code>.</p><h3 id="action-slide-relative-displacement-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-relative-displacement-numeric" aria-hidden="true">#</a> Action slide relative displacement (numeric)</h3><p>Value can be found in the published state on the <code>action_slide_relative_displacement</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-slide-time-delta-numeric" tabindex="-1"><a class="header-anchor" href="#action-slide-time-delta-numeric" aria-hidden="true">#</a> Action slide time delta (numeric)</h3><p>Value can be found in the published state on the <code>action_slide_time_delta</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="mode-switch-enum" tabindex="-1"><a class="header-anchor" href="#mode-switch-enum" aria-hidden="true">#</a> Mode switch (enum)</h3><p>Anti flicker mode can be used to solve blinking issues of some lights.Quick mode makes the device respond faster.. Value can be found in the published state on the <code>mode_switch</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_switch&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>quick_mode</code>, <code>anti_flicker_mode</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold_top</code>, <code>hold_center</code>, <code>hold_bottom</code>, <code>hold_wireless</code>, <code>single_top</code>, <code>single_center</code>, <code>single_bottom</code>, <code>single_wireless</code>, <code>double_top</code>, <code>double_center</code>, <code>double_bottom</code>, <code>double_wireless</code>, <code>release_top</code>, <code>release_center</code>, <code>release_bottom</code>, <code>release_wireless</code>, <code>slider_single</code>, <code>slider_double</code>, <code>slider_hold</code>, <code>slider_up</code>, <code>slider_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',56),m={},b=(0,t(983744).Z)(m,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Aqara"},{default:(0,i.w5)((()=>[(0,i.Uk)("Aqara")])),_:1})])]),r,l,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);