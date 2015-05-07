/**
 * Created by Gareth on 07/05/2015.
 *
 * This pattern is almost the same as the Module Pattern only the revealing module pattern does not terminate variables until they are exposed.
 */

var Robot = ( function() {

    function turnHeadLeft() {
        console.log( 'The robot has turned its head to the left');
    }

    function turnHeadRight() {
        console.log( 'The robot has turned its head to the right');
    }

    return {
        moveHeadLeft : turnHeadLeft,
        moveHeadRight : turnHeadRight
    };

} )( window );

Robot.moveHeadLeft();
Robot.moveHeadRight();