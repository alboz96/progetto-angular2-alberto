import { HeroService } from './hero-service/hero.service';
import { Logger } from './logger-service/logger.service';
import { UserService } from './user-service/user.service';

let heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroService(logger, userService.user.isAuthorized); //HeroService verrà istanziato in questo modo, 
                                                                    //in quanto non deve iniettare tutto UserService, ma solo un suo valore booleano
  };

export let heroServiceProvider =
  { provide: HeroService,           //servizio da istanziare
    useFactory: heroServiceFactory, //useFactory specifica in quale modo istanziato HeroService
    deps: [Logger, UserService]     //sono i servizi da cui HeroService dipende (quelli iniettati al suo interno)
  };

// The useFactory field tells Angular that the provider is a factory function whose implementation is the heroServiceFactory.
// The deps property is an array of provider tokens. 
// The Logger and UserService classes serve as tokens for their own class providers. 
// The injector resolves these tokens and injects the corresponding services into the matching factory function parameters.