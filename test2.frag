#ifdef GL_ES 
precision mediump float; 
#endif 

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 p, float r) {
  // note: sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
  return length(p) - r;  
} 

float sdfCircle2(vec2 p, float r) {
  // note: sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
  return length(p) - r;  
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv = uv - 0.5;
  uv = uv * u_resolution / 100.0;
 
  vec3 t1 = vec3(0.0039, 0.0667, 0.3137); 
  vec3 t2 = vec3(0.0, 0.1176, 0.3843);  
  vec3 t3 = vec3(0.0235, 0.6353, 0.898); 
  vec3 black = vec3(0.0);
  vec3 white = vec3(0.0275, 0.3804, 0.4588);
  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 blue = vec3(0.65, 0.85, 1.0); 
  vec3 darkBlue = vec3(0.0235, 0.0235, 0.8941);
  vec3 orange = vec3(0.8196, 0.549, 0.2745);
  vec3 color = black; 
  color = vec3(uv.x, uv.y, 0.0); 
  vec3 color2 = black; 
  color2 = vec3(uv.x, uv.y, 0.0);

  //nuetron star tbc
  float radius = 0.5;
  // radius = 3.0;
  vec2 center = vec2(0.0, 0.0);
   center = vec2(sin(0.8 * u_time * 500.0)*0.2, cos(500.0 * u_time)*0.2);
  float distanceToCircle = sdfCircle(uv - center, radius);
  color = distanceToCircle > 0.0 ? t1 : t2;
  // color = color * exp(-2.0 * abs(distanceToCircle));
  color = color / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color = color * 0.8 + color * 0.2;
  //color = color * 0.8 + color * 0.2 * sin(distanceToCircle);
  color = color * 0.8 + color * 0.2 * sin(90.0 * distanceToCircle);
  color = color * 1.5 + t2 * 0.2 * sin(100.0 * distanceToCircle - 4.0 * u_time);
//90 for saturns rings
   color = mix(white, color, step(0.1, distanceToCircle));
   color = mix(white, color, step(0.12, abs(distanceToCircle)));
  //color = mix(white, t3, smoothstep(0.0, 0.001, abs(distanceToCircle)));
  // color = mix(white, color, abs(distanceToCircle));
   color = mix(white, color, 1.5 * abs(distanceToCircle));
  //color = mix(white, t3, 1.0 * abs(distanceToCircle)); 

  //saturn 
  float radius2 = 0.5;
  // radius = 3.0;
  vec2 center2 = vec2(0.0, 0.0);
   center2 = vec2(sin(0.8 * u_time * 0.97)*30.0, cos(0.8 * u_time)*0.35);
  float distanceToCircle2 = sdfCircle2(uv - center, radius2);
  color2 = distanceToCircle2 > 0.0 ? t1 : t2;
  // color = color * exp(-2.0 * abs(distanceToCircle));
  color2 = color2 / (1.0 - exp(-2.0 * abs(distanceToCircle2)));
  color2 = color2 * 0.8 + color2 * 0.3;
  //color = color * 0.8 + color * 0.2 * sin(distanceToCircle);
  color2 = color2 * 0.8 + color2 * 0.2 * sin(50.0 * distanceToCircle2);
  color2 = color2 * 1.5 + t2 * 0.2 * sin(70.0 * distanceToCircle2 - 4.0 * u_time);
//90 for saturns rings
   color2 = mix(white, color2, step(0.142, distanceToCircle2));
   color2 = mix(white, color2, step(0.3453, abs(distanceToCircle2)));
  //color = mix(white, t3, smoothstep(0.0, 0.001, abs(distanceToCircle)));
  // color = mix(white, color, abs(distanceToCircle));
   color2 = mix(white, color2, 1.4 * abs(distanceToCircle2));
  //color = mix(white, t3, 1.0 * abs(distanceToCircle)); 

  /* 
  //neutron star ish
  float radius2 = 0.5;
  vec2 center2 = vec2(0.0, 0.0);
  center2 = vec2(sin(2.0 * u_time * 0.97)*0.35, cos(2.0 * u_time)*0.35);
  float distanceToCircle2 = sdfCircle2(uv - center2, radius2);
  color2 = distanceToCircle2 > 0.0 ? t4 : t5;
  color2 = color2 / (1.0 - exp(-2.0 * abs(distanceToCircle2)));
  color2 = color2 * 0.8 + color2 * 0.2;
  color2 = color2 * 0.8 + color2 * 0.2 * sin(50.0 * distanceToCircle2);
  color2 = color2 * 1.5 + t2 * 0.2 * sin(100.0 * distanceToCircle2 - 4.0 * u_time);
  color2 = mix(white, color2, step(0.1, distanceToCircle2));
  color2 = mix(white, color2, step(0.12, abs(distanceToCircle2)));
  color2 = mix(white, color2, 1.5 * abs(distanceToCircle2)); 

  //black hole 
  float radius2 = 0.5;
  vec2 center2 = vec2(0.0, 0.0);
  center2 = vec2(sin(2.0 * u_time * 0.97)*0.35, cos(2.0 * u_time)*0.35);
  float distanceToCircle2 = sdfCircle2(uv - center2, radius2);
  color2 = distanceToCircle2 > 0.0 ? t4 : t5;
  color2 = color2 / (1.0 - exp(-2.0 * abs(distanceToCircle2)));
  color2 = color2 * 0.8 + color2 * 0.2;
  //color2 = color2 * 0.8 + color2 * 0.2 * sin(50.0 * distanceToCircle2);
  //color2 = color2 * 1.5 + t2 * 0.2 * sin(100.0 * distanceToCircle2 - 4.0 * u_time);
  //color2 = mix(white, color2, step(0.1, distanceToCircle2));
  color2 = mix(white, color2, step(0.12, abs(distanceToCircle2)));
  color2 = mix(white, color2, 1.5 * abs(distanceToCircle2));
  */

  gl_FragColor = vec4(color, 1.0); 
  gl_FragColor = vec4(color2, 1.0);
}