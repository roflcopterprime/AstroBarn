let FlowerMixin = {
    draw_flower(m, graphics_state, s) {
        this.shapes.cylinder.draw(
            graphics_state, 
            m.times(Mat4.rotation(Math.PI/2, Vec.of(1,0,0)))
             .times(Mat4.scale(Vec.of(s * .3, s * .3, s * 5))),
            this.plastic.override({ color: this.green })
        );

        this.shapes.cone.draw(
            graphics_state,
            m.times(Mat4.translation(Vec.of(0, s * 5, 0)))
             .times(Mat4.rotation(Math.PI/2, Vec.of(1, 0, 0)))
             .times(Mat4.scale(s * 1.5)),
            this.plastic.override({ color: this.green })
        );

        this.shapes.ball.draw(
            graphics_state,
            m.times(Mat4.translation(Vec.of(0,s * 5.1,0)))
            .times(Mat4.scale(Vec.of(s * 1.5, s * .5, s * 1.5))),
            this.plastic.override({ color: this.pink })
        );

        m = m.times(Mat4.translation(Vec.of(0, s * 5, 0)))
        for (let i = 0; i < 10; i++) {
            this.shapes.petal.draw(
                graphics_state,
                m.times(Mat4.rotation(-Math.PI/2, Vec.of(1, 0, 0)))
                 .times(Mat4.rotation(i * Math.PI/5, Vec.of(0,0,1)))
                 .times(Mat4.translation(Vec.of(0,s * 1.5,0)))
                 .times(Mat4.rotation(Math.PI/16, Vec.of(1, 0, 0)))
                 .times(Mat4.scale(Vec.of(s * 1.6, s * 3, s * 1.6))),
                this.shape_materials["petal"]
            );
        }
        m = m.times(Mat4.translation(Vec.of(0, -.15, 0)))
        for (let i = 0; i < 10; i++) {
            this.shapes.petal.draw(
                graphics_state,
                m.times(Mat4.rotation(-Math.PI/2, Vec.of(1, 0, 0)))
                 .times(Mat4.rotation(Math.PI/10 + i * Math.PI/5, Vec.of(0,0,1)))
                 .times(Mat4.translation(Vec.of(0,s * 1.35,0)))
                 .times(Mat4.rotation(Math.PI/20, Vec.of(1, 0, 0)))
                 .times(Mat4.scale(Vec.of(s * 1.6, s * 3, s * 1.6))),
                this.shape_materials["petal2"]
            );
        }
    }
}