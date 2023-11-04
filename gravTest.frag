#ifdef GL_ES 
precision mediump float; 
#endif 

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 p, float r) {
  return length(p) - r;
}


void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = uv - 0.5;
    uv = uv * u_resolution / 50.0;
    vec3 t1 = vec3(0.0, 0.0, 0.0); 
    vec3 t2 = vec3(1.0, 0.851, 0.0);  
    vec3 t3 = vec3(0.0235, 0.6353, 0.898);  
    vec3 t4 = vec3(0.7373, 0.6784, 0.0392); 
    vec3 t5 = vec3(0.0, 0.0, 0.0);  
    vec3 t6 = vec3(0.7922, 0.0471, 0.0471); 
    vec3 black = vec3(0.0);
    vec3 color = black; 
    color = vec3(uv.x, uv.y, 0.0); 


    float radius = 0.5;
    vec2 center = vec2(0.0, 0.0);
    center = vec2(sin(0.8 * u_time * 0.97)*0.35, cos(0.8 * u_time)*0.35);
    float distanceToCircle = sdfCircle(uv - center, radius);
    color = distanceToCircle > 0.0 ? t1 : t2;






    gl_FragColor = vec4(color, 1.0); 
}