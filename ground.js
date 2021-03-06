//mixin for the ground. basic shape is there, need to add:

let groundMixin = {
  draw_floor(graphics_state, m) {
    //top horizontal bar
    this.shapes.square.draw(
      graphics_state,
      m.times(
        Mat4.translation(Vec.of(150, -20, 0))
          .times(Mat4.rotation(3.14, Vec.of(0, 1, 1)))
          .times(Mat4.scale(Vec.of(550, 650, 0)))
      ),
      this.shape_materials["square"] || this.plastic
    );
  },

  draw_singular_grass(graphics_state, m, xcoord, ycoord, zcoord) {
    //first two times to make logs
    m = m
      .times(Mat4.translation(Vec.of(xcoord, ycoord, zcoord)))
      .times(Mat4.scale(Vec.of(1, 2, 1)));

    const deg = 1 * Math.sin(this.t);
    this.shapes.box.draw(
      graphics_state,
      m,
      this.plastic.override({ color: this.green })
    );
    for (var i = 0; i < 1; ++i) {
      m = m
        .times(Mat4.rotation(0.2, Vec.of(1, 0, -1)))
        .times(Mat4.translation(Vec.of(0, 2, 0)));
      this.shapes.box.draw(
        graphics_state,
        m,
        this.plastic.override({ color: this.green })
      );
    }
    this.shapes.flatpyramid.draw(
      graphics_state,
      m.times(Mat4.translation(Vec.of(0, 1.8, 0))).times(Mat4.scale(Vec.of(1,1.5,1))),
      this.plastic.override({ color: this.green })
    );
  },

  draw_grass_patch(graphics_state, m, xcoord, zcoord) {
    m = m.times(Mat4.translation(Vec.of(xcoord, 0, zcoord)));

    // **** (+, +)
    //xcoord
    for (var i = 0; i < 60; i += 10) {
      this.draw_singular_grass(graphics_state, m, i, -19, 0);
    }
    //zcoord
    for (var i = 0; i < 60; i += 10) {
      this.draw_singular_grass(graphics_state, m, 0, -19, i);
    }
    // **** (-, -)
    //xcoord
    for (var i = 0; i < 60; i += 10) {
      this.draw_singular_grass(graphics_state, m, -i, -19, 0);
    }
    //zcoord
    for (var i = 0; i < 60; i += 10) {
      this.draw_singular_grass(graphics_state, m, 0, -19, -i);
    }
  },

  cover_farm_with_grass_patches(graphics_state, m) {
    this.draw_grass_patch(graphics_state, m, 400, 214);
    this.draw_grass_patch(graphics_state, m, 256, 298);

    this.draw_grass_patch(graphics_state, m, 235, 324);
    this.draw_grass_patch(graphics_state, m, 123, 42);
    this.draw_grass_patch(graphics_state, m, -256, 298);
    
    this.draw_grass_patch(graphics_state, m, -235, 324);
    this.draw_grass_patch(graphics_state, m, -123, 42);
    this.draw_grass_patch(graphics_state, m, -22, 532);

    this.draw_grass_patch(graphics_state, m, 400, -214);
    this.draw_grass_patch(graphics_state, m, 256, -298);
    this.draw_grass_patch(graphics_state, m, 526, -231);
    this.draw_grass_patch(graphics_state, m, 235, -324);
    this.draw_grass_patch(graphics_state, m, 123, -42);
    this.draw_grass_patch(graphics_state, m, 22, -532);

    
    this.draw_grass_patch(graphics_state, m, -256, -298);
   
    this.draw_grass_patch(graphics_state, m, -235, -324);
    this.draw_grass_patch(graphics_state, m, -123, -42);

    this.draw_grass_patch(graphics_state, m, -200, 500);
  },

  draw_firewood(graphics_state, m, xcoord, ycoord) {
    //first two times to make logs

    m = m
      .times(Mat4.translation(Vec.of(xcoord, ycoord, 0)))
      .times(Mat4.scale(Vec.of(1, 2, 21)));

    this.shapes.cylinder.draw(
      graphics_state,
      m,
      this.plastic.override({ color: this.ground_color })
    );
  },

  cover_farm_firewood(graphics_state, m, xcoord, zcoord) {
    m = m.times(Mat4.translation(Vec.of(xcoord, 0, zcoord)));

    this.draw_firewood(graphics_state, m, 1, -18);
    this.draw_firewood(graphics_state, m, 4, -18);
    this.draw_firewood(graphics_state, m, 7, -18);
    this.draw_firewood(graphics_state, m, 10, -18);
    this.draw_firewood(graphics_state, m, 13, -18);
    this.draw_firewood(graphics_state, m, 16, -18);
    this.draw_firewood(graphics_state, m, 19, -18);
    this.draw_firewood(graphics_state, m, 22, -18);
    this.draw_firewood(graphics_state, m, 25, -18);

    this.draw_firewood(graphics_state, m, 5, -14);
    this.draw_firewood(graphics_state, m, 7, -14);
    this.draw_firewood(graphics_state, m, 10, -14);
    this.draw_firewood(graphics_state, m, 13, -14);
    this.draw_firewood(graphics_state, m, 16, -14);
    this.draw_firewood(graphics_state, m, 19, -14);
    this.draw_firewood(graphics_state, m, 22, -14);
    this.draw_firewood(graphics_state, m, 25, -14);

    this.draw_firewood(graphics_state, m, 7, -10);
    this.draw_firewood(graphics_state, m, 10, -10);
    this.draw_firewood(graphics_state, m, 13, -10);
    this.draw_firewood(graphics_state, m, 16, -10);
    this.draw_firewood(graphics_state, m, 19, -10);
    this.draw_firewood(graphics_state, m, 22, -10);
    this.draw_firewood(graphics_state, m, 25, -10);

    this.draw_firewood(graphics_state, m, 10, -6);
    this.draw_firewood(graphics_state, m, 13, -6);
    this.draw_firewood(graphics_state, m, 16, -6);
    this.draw_firewood(graphics_state, m, 19, -6);
    this.draw_firewood(graphics_state, m, 22, -6);
    this.draw_firewood(graphics_state, m, 25, -6);

    this.draw_firewood(graphics_state, m, 10, -2);
    this.draw_firewood(graphics_state, m, 13, -2);
    this.draw_firewood(graphics_state, m, 16, -2);
    this.draw_firewood(graphics_state, m, 19, -2);
    this.draw_firewood(graphics_state, m, 22, -2);
    this.draw_firewood(graphics_state, m, 25, -2);
  }
};
