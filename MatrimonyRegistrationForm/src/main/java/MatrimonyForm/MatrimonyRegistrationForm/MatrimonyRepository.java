package MatrimonyForm.MatrimonyRegistrationForm;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatrimonyRepository extends CrudRepository<Matrimony, Integer>
{

}
