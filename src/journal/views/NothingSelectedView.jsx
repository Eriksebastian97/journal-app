import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    // los comp de materia casi todos vienen con xs o sx
    //sx :styles extends nos permite trabajar con la propiedas styles y tenemos acceso al theme que elegimos themeProvider
    //xs:hace referencia a un tamaño de , pantalla pequeñas y medianas
    sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius:5}}
  >
    <Grid item xs={12}>
         <StarOutline sx={{fontSize:100,color:"white"}} />
    </Grid>
    <Grid item xs={12}>
        <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
    </Grid>
 
  </Grid>
  )
}
