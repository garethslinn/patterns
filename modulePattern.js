/**
 * Created by Gareth on 07/05/2015.
 *
 * The Module pattern is has both private and public access to variables and methods.
 * It is particually useful for reducing the global variable clashes.
 */

var Robot = ( function() {

    var privateRobot = {
        talk : 'hello'
    };

    function Robot() {

        this.turnHeadLeft = function turnHeadLeft() {
            console.log( 'The robot has turned its head to the left');
        };

        this.turnHeadRight = function turnHeadRight() {
            console.log( 'The robot has turned its head to the right');
        };

    }

    return Robot;
} )( window );

var robot = new Robot();
robot.turnHeadLeft();
robot.turnHeadRight();

