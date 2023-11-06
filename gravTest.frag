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
    vec3 t1 = vec3(0.0, 0.0, 0.0); 
    vec3 t2 = vec3(1.0, 0.851, 0.0);  
    vec3 t3 = vec3(0.0235, 0.6353, 0.898);  
    vec3 t4 = vec3(0.7373, 0.6784, 0.0392); 
    vec3 t5 = vec3(0.0, 0.0, 0.0);  
    vec3 t6 = vec3(0.0667, 0.4196, 0.0941); 
    vec3 black = vec3(0.0);
    vec3 color = black; 
    color = vec3(uv.x, uv.y, 0.0);
    vec3 color2 = black; 
    color2 = vec3(uv.x, uv.y, 0.0);   
    float x1;
    float y1;
    float x2; 
    float y2;
    float xdiff = x1 - x2; 
    float ydiff = y1 - y2;
    //float distanceBetweenObjects = pow((pow(xdiff, 2) + pow(ydiff,2)), 0.5); //pythagoras 
    float mass1 = 10.0; 
    float mass2 = 5.0; 
    //float gConst = pow(6.67, -11);
     //F = Gm1m2 / r^2
    //float force = (gConst * m1 * m2) / (pow(distanceBetweenObjects, 2));
    //F = ma
    //float a1 = force / mass1 
    //float a2 = force / mass2 
    //angle = //calc angle between objects so a can be split into x and y again 
    //then a can be be applied to the positions of ob1 and ob2
   

    float radius = 0.5;
    vec2 center = vec2(x1, y1);
    //center = vec2(sin(0.8 * u_time * 0.97)*0.35, cos(0.8 * u_time)*0.35);
    float distanceToCircle = sdfCircle(uv - center, radius);
    color = distanceToCircle > 0.0 ? t1 : t2;

    float radius2 = 0.5;
    vec2 center2 = vec2(x2, y2);
    //center2 = vec2(sin(0.8 * u_time * 0.97)*0.35, cos(0.8 * u_time)*0.35);
    float distanceToCircle2 = sdfCircle2(uv - center2, radius2);
    color2 = distanceToCircle2 > 0.0 ? t1 : t2;
    color = mix(t6, color, 1.5 * abs(distanceToCircle2));

    


    gl_FragColor = vec4(color, 1.0); 
}