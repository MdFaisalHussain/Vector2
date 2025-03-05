
# Vector2.js  
A lightweight **2D vector** library for JavaScript, inspired by Godot's `Vector2` class.  

## 🚀 Features  
✔️ Basic vector operations: **add, subtract, multiply, divide**  
✔️ Vector properties: **magnitude, normalization**  
✔️ Angle calculations: **angle, angleTo**  
✔️ Dot product support  
✔️ Radians & Degrees conversion  
✔️ Predefined constants: **ZERO, ONE, UP, DOWN, LEFT, RIGHT**  

---

## 📦 Installation  
Simply include `Vector2.js` in your project.  

### **CDN / Minified Version**  
```html
<script src="vector2.min.js"></script>
```

### **Node.js / ES6 Import**
```js
import Vector2 from './vector2.js';
```

---

## 🎯 Usage  

### **Creating Vectors**
```js
let v1 = new Vector2(3, 4);
let v2 = new Vector2(1, 2);
```

### **Basic Operations**
```js
let sum = v1.add(v2);       // (4, 6)
let diff = v1.subtract(v2); // (2, 2)
let scaled = v1.multiply(2); // (6, 8)
let normalized = v1.normalized; // (0.6, 0.8)
```

### **Dot Product**
```js
let dotProduct = v1.dot(v2); // 3*1 + 4*2 = 11
```

### **Angles & Rotation**
```js
let angle = v1.angle(); // Get angle in radians
let angleToV2 = v1.angleTo(v2); // Get angle between v1 and v2
```

### **Radians & Degrees Conversion**
```js
let rad = Vector2.toRadians(180); // 3.1415 (π)
let deg = Vector2.toDegrees(Math.PI); // 180
```

### **Predefined Constants**
```js
console.log(Vector2.ZERO);  // (0, 0)
console.log(Vector2.ONE);   // (1, 1)
console.log(Vector2.UP);    // (0, -1)
console.log(Vector2.RIGHT); // (1, 0)
```

---

## 📜 API Reference

### `new Vector2(x, y)`
Creates a new vector. Defaults to `(0, 0)`.

### **Properties**
- `x, y` → Components of the vector.
- `magnitude` → Returns the length of the vector.
- `normalized` → Returns a unit vector.

### **Methods**
| Method | Description |
|--------|-------------|
| `add(vector)` | Adds two vectors. |
| `subtract(vector)` | Subtracts two vectors. |
| `multiply(scalar)` | Multiplies vector by a scalar. |
| `divide(scalar)` | Divides vector by a scalar. |
| `dot(vector)` | Returns dot product. |
| `angle()` | Returns vector’s angle in radians. |
| `angleTo(vector)` | Angle between two vectors. |
| `toRadians(degrees)` | Converts degrees to radians. |
| `toDegrees(radians)` | Converts radians to degrees. |

---

## 🔥 Why Use Vector2.js?
- Lightweight & **fast**
- Works in **browsers and Node.js**
- Inspired by **Godot’s Vector2** for game development  

---

## 📜 License  
MIT License - Free to use for any project!  
