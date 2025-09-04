import turtle

t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("white")

# --- Outer red circle ---
t.penup()
t.goto(0, -205)
t.pendown()
t.color("red")
t.begin_fill()
t.circle(205)
t.end_fill()

# --- Hexagon wedges (purple and ivory alternating) ---
t.penup()
t.goto(0, 0)
t.setheading(90)
for i in range(6):
    if i % 2 == 0:
        t.color("purple")
    else:
        t.color("pink")
    t.begin_fill()
    t.forward(120)
    t.right(60)
    t.forward(120)
    t.goto(0, 0)
    t.end_fill()
    t.setheading(90 - (i+1)*60)

# --- Larger Green triangles reaching the squares ---
t.setheading(90)
for i in range(6):
    t.penup()
    t.forward(120)   # move to hexagon tip
    t.pendown()
    t.color("green")
    t.begin_fill()
    t.left(30)
    t.forward(80)    # extended size (was 40)
    t.right(120)
    t.forward(80)
    t.right(120)
    t.forward(80)
    t.end_fill()
    t.penup()
    t.goto(0, 0)
    t.setheading(90 - (i+1)*60)

# --- Outer yellow & orange squares ---
colors = ["yellow", "orange"]
t.setheading(0)
for i in range(6):
    t.penup()
    t.forward(140)
    t.pendown()
    t.color(colors[i % 2])
    t.begin_fill()
    for _ in range(4):
        t.forward(55)
        t.right(90)
    t.end_fill()
    t.penup()
    t.goto(0, 0)
    t.right(60)

# --- Inner blue circle (drawn last so it's visible) ---
t.penup()
t.goto(0, -25)
t.pendown()
t.color("blue")
t.begin_fill()
t.circle(30)
t.end_fill()

t.hideturtle()
turtle.done()
