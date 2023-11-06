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

float sdfCircle3(vec2 p, float r) {
  // note: sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
  return length(p) - r;  
} 

float sdfCircle4(vec2 p, float r) {
  // note: sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
  return length(p) - r;  
} 

float sdfCircle5(vec2 p, float r) {
  // note: sqrt(pow(p.x, 2.0) + pow(p.y, 2.0)) - r;
  return length(p) - r;  
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv = uv - 0.5;
  uv = uv * u_resolution / 100.0;
 
  vec3 t1 = vec3(0.3333, 0.3569, 0.0588); 
  vec3 t2 = vec3(0.7255, 0.7608, 0.1922);  
  vec3 t3 = vec3(0.0235, 0.6353, 0.898);  
  vec3 t4 = vec3(0.8588, 0.8471, 0.4431); 
  vec3 t5 = vec3(0.2549, 0.0667, 0.8235);  
  vec3 t6 = vec3(0.8235, 0.0667, 0.7216); 
  vec3 t7 = vec3(0.2549, 0.0667, 0.8235);  
  vec3 t8 = vec3(0.2549, 0.0667, 0.8235); 
  vec3 black = vec3(0.0);
  vec3 white = vec3(0.702, 0.7098, 0.7922);
  vec3 red = vec3(0.8784, 0.2314, 0.1333);
  vec3 blue = vec3(0.1098, 0.5961, 0.9647); 
  vec3 darkBlue = vec3(0, 0, 1);
  vec3 orange = vec3(0.7765, 0.5686, 0.1255);
  vec3 color = black; 
  color = vec3(uv.x, uv.y, 0.0); 
  vec3 color2 = black; 
  color2 = vec3(uv.x, uv.y, 0.0); 
  vec3 color3 = black; 
  color3 = vec3(uv.x, uv.y, 0.0); 
  vec3 color4 = black; 
  color4 = vec3(uv.x, uv.y, 0.0); 
  vec3 color5 = black; 
  color5 = vec3(uv.x, uv.y, 0.0);

  //centre object
  float radius = 0.5;
  vec2 center = vec2(0.0, 0.0);
  //center = vec2(sin(0.8 * u_time * 0.97)*0.35, cos(0.8 * u_time)*0.35);
  float distanceToCircle = sdfCircle(uv - center, radius);
  color = distanceToCircle > 0.0 ? t1 : t2;
  color = color / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color = color * 0.8 + color * 0.2;
  color = color * 0.8 + color * 0.2 * sin(50.0 * distanceToCircle);
  color = color * 1.5 + t2 * 0.2 * sin(100.0 * distanceToCircle - 4.0 * u_time);
  color = mix(white, color, step(0.1, distanceToCircle));
  color = mix(white, color, step(0.12, abs(distanceToCircle)));
  //color = mix(white, color, 1.5 * abs(distanceToCircle));


  float radius2 = 2.0;
  vec2 center2 = vec2(0.0, 0.0);
  //center2 = vec2(sin(1.6 * u_time * 0.97)*0.35, cos(1.6 * u_time)*0.35);
  float distanceToCircle2 = sdfCircle2(uv - center2, radius2);
  color2 = distanceToCircle2 > 0.0 ? t4 : t5;
  color2 = color2 / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color2 = color2 * 0.8 + color2 * 0.2;
  color = mix(white, color, step(0.12, abs(distanceToCircle)));
  color = mix(white, color, 1.5 * abs(distanceToCircle2));


  float radius3 = 3.5;
  vec2 center3 = vec2(0.0, 0.0);
  //center3 = vec2(sin(1.6 * u_time * 0.97)*0.35, cos(1.6 * u_time)*0.35);
  float distanceToCircle3 = sdfCircle3(uv - center3, radius3);
  color3 = distanceToCircle3 > 0.0 ? t4 : t5;
  color3 = color3 / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color3 = color3 * 0.8 + color3 * 0.2;
  color = color * 1.5 + t4 * 0.2 * cos(900.0 * distanceToCircle - 2.0 * u_time);
  color = mix(white, color, step(0.12, abs(distanceToCircle)));
  color = mix(white, color, 1.5 * abs(distanceToCircle3)); 


  float radius4 = 4.0;
  vec2 center4 = vec2(0.0, 0.0);
  //center4 = vec2(sin(1.6 * u_time * 0.97)*0.35, cos(1.6 * u_time)*0.35);
  float distanceToCircle4 = sdfCircle4(uv - center4, radius4);
  color4 = distanceToCircle4 > 0.0 ? t4 : t5;
  color4 = color4 / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color4 = color4 * 0.8 + color4 * 0.2;
  color = color * 1.5 + t5 * 0.5 * tan(0.8 * distanceToCircle - 1.0 * u_time);
  color = mix(white, color, step(0.12, abs(distanceToCircle)));
  color = mix(white, color, 1.5 * abs(distanceToCircle4));  
  


  float radius5 = 5.0;
  vec2 center5 = vec2(0.0, 0.0);
  //center5 = vec2(sin(1.6 * u_time * 0.97)*0.35, cos(1.6 * u_time)*0.35);
  float distanceToCircle5 = sdfCircle5(uv - center5, radius5);
  color5 = distanceToCircle5 > 0.0 ? t4 : t5;
  color5 = color5 / (1.0 - exp(-2.0 * abs(distanceToCircle)));
  color5 = color5 * 0.8 + color2 * 0.2;
  color = mix(white, color, step(0.12, abs(distanceToCircle)));
  color = mix(white, color, 1.5 * abs(distanceToCircle5));
  color = color * 4.5 + t6 * 5.0 * tan(cos(0.8 * distanceToCircle - 10.0 * u_time));


  gl_FragColor = vec4(color, 1.0); 
  //gl_FragColor = vec4(color2, 1.0); 
}