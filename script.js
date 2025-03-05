console.log(Vector2.toRadians(180));  // Output: 3.141592653589793 (π radians)
console.log(Vector2.toDegrees(Math.PI));  // Output: 180 degrees

const v1 = new Vector2(1, 1);
const v2 = new Vector2(3, 4);

console.log(v1.magnitude);  // 1.414
console.log(v1.magnitudeSquared);  // 2
console.log(v1.normalize().toString());  // Vector2(0.707, 0.707)

console.log(v1.angle);  // 0.785 radians (~45 degrees)
console.log(v1.angleDegrees);  // 45 degrees
console.log(v1.angleTo(v2));  // Angle between v1 and v2 in radians
console.log(v1.angleToDegrees(v2));  // Angle in degrees

console.log(v1.distanceTo(v2));  // Distance between vectors
console.log(v1.lerp(v2, 0.5).toString()); // Linear interpolation
console.log(v1.slerp(v2, 0.5).toString()); // Spherical interpolation
console.log(v1.project(v2).toString()); // Projection of v1 onto v2
console.log(v1.reflect(new Vector2(0, 1)).toString()); // Reflection across Y-axis
console.log(v1.perpendicular().toString()); // Perpendicular vector
console.log(v1.orthonormal().toString()); // Normalized perpendicular vector
console.log(v1.clampLength(2, 4).toString()); // Clamped between 2 and 4
