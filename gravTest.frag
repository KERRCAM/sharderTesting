#ifdef GL_ES 
precision mediump float; 
#endif 

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 p, float r) {
  return length(p) - r;
}

float sdfCircle2(vec2 p, float r) {
  return length(p) - r;
}


void main() { 
  
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv = uv - 0.5;
    uv = uv * u_resolution / 50.0;
    vec3 t1 = vec3(0.1216, 0.7608, 0.0863); 
    vec3 t2 = vec3(0.3922, 0.0, 0.0);  
    vec3 t3 = vec3(0.0235, 0.6353, 0.898);  
    vec3 t4 = vec3(0.7373, 0.6784, 0.0392); 
    vec3 t5 = vec3(0.0, 0.0, 0.0);  
    vec3 t6 = vec3(0.0, 1.0, 0.0157); 
    vec3 black = vec3(0.0);
    vec3 color = black; 
    color = vec3(uv.x, uv.y, 0.0);
    vec3 color2 = black; 
    color2 = vec3(uv.x, uv.y, 0.0);  


    //needs to run each frame  
    float x1; //inital values need to run only once
    float y1; //need an initial velocity as well
    float x2; 
    float y2;
    float xdiff = x1 - x2; 
    float ydiff = y1 - y2;
    float distanceBetweenObjects = pow((pow(xdiff, 2.0) + pow(ydiff,2.0)), 0.5); //pythagoras 
    float mass1 = 10.0; 
    float mass2 = 5.0; 
    float gConst = pow(6.67, -11.0);
    //F = Gm1m2 / r^2
    float force = (gConst * mass1 * mass2) / (pow(distanceBetweenObjects, 2.0));
    //F = ma
    float a1 = force / mass1;
    float a2 = force / mass2;
    float angle = tan(ydiff / xdiff); 
    x1 = x1 + (a1 * cos(angle)); 
    y1 = y1 + (a1 * sin(angle));
   

    float radius = 0.5;
    vec2 center = vec2(x1, y1);
    float distanceToCircle = sdfCircle(uv - center, radius);
    color = distanceToCircle > 0.0 ? t1 : t2;

    float radius2 = 0.5;
    vec2 center2 = vec2(x2, y2);
    center2 = vec2(sin(1.6 * u_time), cos(1.6 * u_time));
    float distanceToCircle2 = sdfCircle2(uv - center2, radius2);
    color2 = distanceToCircle2 > 0.0 ? t2 : t2;
    color = mix(t4, color, 1.0 * abs(distanceToCircle2));
    

    


    gl_FragColor = vec4(color, 1.0); 
}