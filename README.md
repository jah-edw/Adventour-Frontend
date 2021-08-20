# Adventour-Frontend

Frontend for Adventour

Troubleshooting

cd client/adventour before doing npm start, otherwise 'no gulpfile found'

Error:
Cannot find module '@react-navigation/native' or its corresponding type declarations.
Fix:
From inside adventour, yarn add @react-navigation/native (same thing with npm did't work )

Error:
"Unterminated regular expression literal"
Fix:
Make sure file is in .tsx

Nice article on app structure:
https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/

https://www.youtube.com/watch?v=nQVCkqvU1uE

                <Text>
                  {tourInfo.weapons ? tourInfo.weapons[1].weapon : "no"}
                </Text>
